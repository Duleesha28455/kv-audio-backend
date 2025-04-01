import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now()
    },
    profilePicture:{
        type:String,
        required:true,
        default:"https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
        
    },
    isApproved:{
        type:Boolean,
        required:true,
        default:false
    }
})

const Review = mongoose.model("Review", reviewSchema);

export default Review;