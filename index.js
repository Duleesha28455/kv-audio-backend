import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Student from "./models/student.js";// import krpu ns e student.js eke code ek meken ain krnn pluwn dn
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js"; // Adjust the path if needed
import jwt from "jsonwebtoken"
//import studentRouter from "./routes/studentRoute.js";

const app = express();

app.use(bodyParser.json());
app.use ((req,res,next)=>{
   
    let token=req.header
    ("Authorization")
    
    

    if(token !=null){
        token=token.replace("Bearer ","")

        console.log(token);

        jwt.verify(token,"dulee123",
            (err,decoded)=>{
                if(!err){
                    console.log(decoded);
                }
            }
        );
    }
   next();

});

let mongoUrl = "mongodb+srv://admin:dulee123@cluster0.wlain.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl)

const connection = mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})

//app.use ("/students",studentRouter)
app.use("/api/users",userRouter)
app.use ("/api/products",productRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
