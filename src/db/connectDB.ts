import mongoose from "mongoose"
 const dbUrl:string = 'mongodb://127.0.0.1:27017/Ts-CrudApp'

 export const connectDB = async()=>{
    try {
        mongoose.connect(dbUrl)
        console.log('database connected successfuly');
    } catch (error) {
        console.log('database connection error',error);
    }
 }