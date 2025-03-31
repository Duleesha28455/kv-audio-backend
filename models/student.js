import mongoose from "mongoose";


//create a schema in mongodb - Data structure which is expected to be saved in db
   let studentSchema = mongoose.Schema({
    name: String,
    age: Number
})
// collection of data in cluster-studnets data in students collection,product data in product collection,like that..
// Student-connection between schema and students collection
let Student = mongoose.model("students",studentSchema)  //collection ekath ekk connection ekk tyenne meyt,e nis aniwren ek one data(student knk) find krnn,delete krnn,add krnn

export  default Student   //me code ek wena thanaka use kirimata


// model folder eke tyenne db ekth ekk connection ek hdgnn one tika