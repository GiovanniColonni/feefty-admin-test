"use server";

import { revalidatePath } from "next/cache";
import PrismaAdapter from "@/lib/prisma/PrismaAdapter";
import MongoAdapter from "@/lib/mongo/MongoAdapter";

/**
 * HERE change the adapter to use Prisma or Mongo
 */
const adapter =  PrismaAdapter // MongoAdapter

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
    const res = await adapter.updateUser(id,user)
    revalidatePath("/")
    return res
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

export async function getRoles(){
    return await adapter.getRoles()
}

export async function getAdapterName(){
    return adapter.getAdapterName()
}