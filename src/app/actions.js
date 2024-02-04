"use server";
// Qui puoi gia' leggere i dati dal server chiamando quello che c'e' scritto dentro data
    // pero' devi fare readDdata() e non readDataPrisma() ! cosi' sarebbe ortogonale 
    // Non c'e' una Business Logic vera e propria che si puo' separare poi dalla lettura dai dati
    // ma in questo punto puoi comunque fare read, e fare un adapter che passi aread in case a un setting
    // in modo che sia l'oggetto che gli passi a dare la specifica logica (dependency injection)
    // queste vanno in actions.js  
import { revalidatePath } from "next/cache";
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

export async function getUserById(id){
    try{
        return await prisma.user.findUnique({where:{id}})
    } catch(e){
        console.log("Error get by id",e)
        return {}
    }
}

export async function updateUser(id,user){
    try{
        await prisma.user.update({where:{id},data:user})
        return true
    }catch(e){
        console.log("Error update",e)
        return false
    }
}

export async function deleteUserById(id){
    try{
        await prisma.user.delete({where:{id}})
        return true
    }catch(e){
        console.log("Error delete",e)
        return false
    }
}

export async function changeUserState(form){
    const id = form.get("id")
    try{
        const user = await prisma.user.findUnique({where:{id}})
        const newstatus = user.status == 'active' ? 'inactive' : 'active'
        
        await prisma.user.update({where:{id},data:{status:newstatus}})

        // revaidate path
        revalidatePath("/")
        return true
    }catch(e){
        console.log("Error change state",e)
        return false
    }
}