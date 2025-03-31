import express from "express"
import { getStudents, postStudents } from "../controllers/studentController.js" // default nathuwa export krpu ew

let studentRouter=express.Router()

studentRouter.get("/",getStudents);

studentRouter.post("/",postStudents);

export default studentRouter

//Route folder eke tyenne athuru parawal wala wistr