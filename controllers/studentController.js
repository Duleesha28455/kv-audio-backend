import Student from "../models/student.js"

//get request ekk awoth wenn on de
export function getStudents(req,res){
    Student.find().then(
        (result)=>{
            res.json(result)
        }
    ).catch(
        (error)=>{
            res.status(500).json({
                error:error
            })
        })
}

//post request ekk awoth wenn on de export krnwa
export function postStudents(req,res){
    let studentData=req.body
    let student=new Student(studentData)

    student.save().then(()=>{
        res.json({
            message:"Student saved successfully"
        })
    }).catch(()=>{
        message:"Students saving failed"
    })
}

// controller folder eke tyenne backend eke wenn one dewl tika function wise daggnw