import { PrismaClient } from "@prisma/client";
import { procedureDB } from "./utils";

const prisma = new PrismaClient();

async function getUsers() {
    return await procedureDB(async () => {
        return await prisma.user.findMany();
    })
}

async function addUser(user) {
    return await procedureDB(async (user) => {
        await prisma.user.create({ data: user });
        return true
    }, user)
}

async function getUserById(id) {
    return await procedureDB(async (id) => {
        return await prisma.user.findUnique({ where: { id } })
    }, id)
}

async function updateUser(id, user) {
    return await procedureDB(async (id, user) => {
        await prisma.user.update({ where: { id }, data: user })
        return true
    }, id, user)
}

async function deleteUserById(id) {
    return await procedureDB(async (id) => {
        await prisma.user.delete({ where: { id } })
        return true
    }, id)
}

async function changeUserState(id) {
    return await procedureDB(async (id) => {
        const user = await prisma.user.findUnique({ where: { id } })
        const newstatus = user.status == 'active' ? 'inactive' : 'active'
        await prisma.user.update({ where: { id }, data: { status: newstatus } })
        return true
    }, id)
}

async function getRoles() {
    return await procedureDB(async () => {
        const res = await prisma.role.findMany()
        const map = res.map((role) => {
            return { value: role.id, label: role.label }
        })
        return map
    })
}

async function getAdapterName() {
    return "prisma"
}

const PrismaAdapter = {
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUserById,
    changeUserState,
    getRoles,
    getAdapterName
}

export default PrismaAdapter;