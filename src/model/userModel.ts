import mongoose, { Document,Schema } from 'mongoose'
export interface students{
    name:string
    age:number
    email:string
}
const UserSchema = new Schema<students>({
     name:{
     type:String,
     required:true
     },
     age:{
        type:Number,
        required:true
     },
     email:{
        type:String,
        required:true
     }
})

const  user = mongoose.model<students>('User schema',UserSchema)
export default user