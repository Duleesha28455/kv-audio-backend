import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: String,
        required:true,
        default:"customer"
    },
    firstName:{
        type: String,
        required:true
    },
    lasttName:{
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User",userSchema);//db collection ekai backend ek athrai sambandathawa hadnne meya -usermodel

export default User;