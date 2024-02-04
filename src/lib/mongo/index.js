import { Mongoose } from "mongoose";

export default async function connectToMongo() {
    const client = new Mongoose();
    try{
        await client.connect(process.env.MONGO_URL);
    }catch(e){
        console.error(e);
    }
    return client;
}