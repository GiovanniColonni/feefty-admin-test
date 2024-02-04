"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
    return await prisma.user.findMany();
}

export async function addUser(user) {
    try{
        await prisma.user.create({ data: user });
        return true
    }catch(e){
        console.log(e)
        return false
    }
    return 
}
