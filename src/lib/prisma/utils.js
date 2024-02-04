import { PrismaClient,
         PrismaClientInitializationError,
         PrismaClientKnownRequestError } from "@prisma/client";

const prisma = new PrismaClient();

export async function procedureDB(functionToRun,...params){
    try{
        await prisma.$connect();
        return await functionToRun(...params);
    }catch(e){
        if (e instanceof PrismaClientInitializationError) {
            console.error("Database connection error in procedureDB: ", e);
        }
        if(e instanceof PrismaClientKnownRequestError){
            console.error("Database request error in procedureDB: ", e);
        }
        console.error("Error in procedureDB: ", e)
        return false
    }finally{
        await prisma.$disconnect();
    }
}