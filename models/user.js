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
    },
    profilePicture:{
        type:String,
        required:true,
        default:"https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
    }
})

const User=mongoose.model("User",userSchema);//db collection ekai backend ek athrai sambandathawa hadnne meya -usermodel

export default User;