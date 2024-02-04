"use server";

import { revalidatePath } from "next/cache";
import PrismaAdapter from "@/lib/prisma/PrismaAdapter";
import MongoAdapter from "@/lib/mongo/MongoAdapter";

const adapter = PrismaAdapter

export async function getUsers() {
    const users = await adapter.getUsers()
    return users || []
}

export async function addUser(user) {
    const res = await adapter.addUser(user) 
    revalidatePath("/")
    return res
}

export async function getUserById(id){
    return await adapter.getUserById(id)
}

export async function updateUser(id,user){
    return await adapter.updateUser(id,user)
}

export async function deleteUserById(id){
    const res =  await adapter.deleteUserById(id)
    revalidatePath("/updateuser")
    return res
}

export async function changeUserState(form){
    const id = form.get("id")
    const res = await adapter.changeUserState(id)
    revalidatePath("/")
}