const { MongoClient, ObjectId } = require('mongodb');
import cuid from "cuid"
const url = 'mongodb://localhost:27017';
const dbName = 'feefty';
const client = new MongoClient(url);
const collectionName = 'users';

// Since mongo uses ObjectID, we need to normalize the user object
// because here we consider userId as the id
// this is a specific case for mongo and so 
// it's locate in the adapter
function normalizeUser(user) {
    delete user._id
    user.id = user.userId
    return user
}

function denormalizeUser(user) {
    user.userId = cuid()
    delete user.id
    return user
}

async function connectToMongoDB(collectionName = 'users') {
    await client.connect();
    return client.db(dbName).collection(collectionName);
}

async function getUsers() {
    try {
        const collection = await connectToMongoDB();
        const users = await collection.find().toArray();
        return users.map(normalizeUser)

    } catch (error) {
        throw new Error('Failed to get users');
    }
}

async function addUser(user) {
    try {
        const collection = await connectToMongoDB();
        const m_user = denormalizeUser(user)
        const result = await collection.insertOne(m_user);
        return result.acknowledged
    } catch (error) {
        console.error(error);
        throw new Error('Failed to add user');
    }
}

async function getUserById(userId) {
    try {
        const collection = await connectToMongoDB();
        const user = await collection.findOne({ userId: userId });
        if (user === null) {
            return
        }
        return normalizeUser(user)
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get user by id');
    }
}

async function updateUser(userId, updatedUser) {
    try {
        const collection = await connectToMongoDB();
        const result = await collection.findOneAndUpdate(
            { userId: userId },
            { $set: updatedUser },
            { returnDocument: 'after' } // workaround to get the updated document
        );
        return true;
    } catch (error) {
        throw new Error('Failed to update user');
    }
}

async function deleteUserById(userId) {

    try {
        const collection = await connectToMongoDB();
        const res = await collection.deleteOne({ userId: userId });
        return res.acknowledged
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete user');
    }
}

async function changeUserState(userId) {
    try {
        const userState = (await getUserById(userId)).status;
        let newState = "active";
        if (userState === "active") {
            newState = "inactive";
        }
        return await updateUser(userId, { status: newState });
    } catch (error) {
        throw new Error('Failed to change user state');
    }
}

async function getRoles() {
    try {
        const collection = await connectToMongoDB("roles");
        const roles = await collection.find().toArray();

        const rolemap = roles.map(role => {
            return { value: String(role._id), label: role.label }
        })

        return rolemap
    } catch (error) {
        throw new Error('Failed to get roles');
    }
}

async function getAdapterName() {
    return "mongodb"
}

module.exports = {
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUserById,
    changeUserState,
    getRoles,
    getAdapterName
};
