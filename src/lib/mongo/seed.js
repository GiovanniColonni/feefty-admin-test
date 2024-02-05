const { MongoClient, ObjectId } = require('mongodb');
const cuid = require("cuid");

const url = 'mongodb://localhost:27017';
const dbName = 'feefty';
const client = new MongoClient(url);

async function resetDatabase(db) {
    await db.collection('roles').deleteMany({});
    await db.collection('users').deleteMany({});
    console.log('[MONGO] Database reset');
}

async function createRolesAndUsers(db) {
    const rolesResult = await db.collection('roles').insertMany([
        { roleId: cuid(), slug: 'admin', label: 'Admin', permissions: ['create_user', 'read_user', 'update_user', 'delete_user'] },
        { roleId: cuid(), slug: 'account_manager', label: 'Account Manager', permissions: ['read_user'] },
        { roleId: cuid(), slug: 'operations', label: 'Operations', permissions: ['create_user', 'read_user', 'update_user'] },
        { roleId: cuid(), slug: 'product', label: 'Product', permissions: ['read_user'] }
    ]);

    const roles = await db.collection('roles').find().toArray();
    const roleMap = roles.reduce((map, role) => {
        map[role.slug] = role._id;
        return map;
    }, {});

    const usersResult = await db.collection('users').insertMany([
        { userId: cuid(), email: 'cedric.bailly@email.com', firstName: 'Cédric', lastName: 'Bailly', status: 'active', roleId: roleMap['admin'].toString() },
        { userId: cuid(), email: 'leon.bertin@gmail.com', firstName: 'Léon', lastName: 'Bertin', status: 'active', roleId: roleMap['operations'].toString() },
        { userId: cuid(), email: 'tom.bourgeois@caramail.fr', firstName: 'Tom', lastName: 'Bourgeois', status: 'active', roleId: roleMap['product'].toString() },
        { userId: cuid(), email: 'elisa.guerin@email.com', firstName: 'Élisa', lastName: 'Guerin', status: 'active', roleId: roleMap['account_manager'].toString() }
    ]);

    console.log('[MONGO] Roles and users created');
    console.log('[MONGO] Roles inserted:', rolesResult.insertedCount);
    console.log('[MONGO] Users inserted:', usersResult.insertedCount);
}

async function main() {
    var err = null;
    try {
        await client.connect();
        console.log('[MONGO] Connected to MongoDB');
        const db = client.db(dbName);

        await resetDatabase(db);
        await createRolesAndUsers(db);

        console.log('[MONGO] Seed complete');
    } catch (err) {
        console.error('[MONGO] Seed failed', err);
    } finally {
        await client.close();
        process.exit(err ? 1 : 0);
    }
}

main();
