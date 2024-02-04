const { MongoClient, ObjectId } = require('mongodb');
import cuid from "cuid"
const url = 'mongodb://localhost:27017';
const dbName = 'feefty';
const client = new MongoClient(url);
const collectionName = 'users'; // Assuming your collection is named 'users'

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

async function connectToMongoDB() {
    await client.connect();
    return client.db(dbName).collection(collectionName);
}

// Function to get all users
async function getUsers() {
    try {
        const collection = await connectToMongoDB();
        const users = await collection.find().toArray();
        return users.map(normalizeUser)

    } catch (error) {
        throw new Error('Failed to get users');
    }
}

// Function to add a new user
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

// Function to get a user by ID
async function getUserById(userId) {
    try {
        const collection = await connectToMongoDB();
        const user = await collection.findOne({ userId: userId });
        if(user === null){
            return 
        }
        return normalizeUser(user)
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get user by id');
    }
}

// Function to update a user
async function updateUser(userId, updatedUser) {
    try {
        const collection = await connectToMongoDB();
        const result = await collection.findOneAndUpdate(
            { userId: userId },
            { $set: updatedUser },
            { returnDocument: 'after' } // MongoDB driver 4.x uses 'returnDocument' instead of 'returnOriginal'
        );
        return true;
    } catch (error) {
        throw new Error('Failed to update user');
    }
}

// Function to delete a user by ID
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

// Function to change user state
async function changeUserState(userId, newState) {
    try {
        return await updateUser(userId, { status: newState });
    } catch (error) {
        throw new Error('Failed to change user state');
    }
}

module.exports = {
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUserById,
    changeUserState
};
