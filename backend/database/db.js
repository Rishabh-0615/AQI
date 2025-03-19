import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const connectDb= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"AQI",
        });
        console.log("connected successfully!");
        
    }
    catch(error){
        console.log(error)
    }
};
export default connectDb;