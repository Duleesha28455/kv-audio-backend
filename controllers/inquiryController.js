
import Inquiry from "../models/inquiry.js";
import { isItAdmin, isItCustomer } from "./userController.js";
export async function addInquiry(req,res)
{
    try{
        if(isItCustomer(req)){
            console.log(req.user)
            const data=req.body
            data.email=req.user.email
            data.phone=req.user.phone

            let id=0;
            const inquiries= await Inquiry.find().sort({id:-1}).limit(1);

            if(inquiries.length==0){
                id=1;
            }else{
                id=inquiries[0].id+1;
            }
            data.id=id;
            const newInquiry=new Inquiry(data);
            const result=await newInquiry.save();
            res.json({
                message:"Inquiry added successfully",
                id:response.id
            })

        }

    }catch(e){
        
        res.status(500).json({
            message: "Error while adding inquiry",
        })
    }
}
export async function getInquiries(req,res){
    try{
        if(isItCustomer(req)){
            const inquiries=await Inquiry.find({email:req.user.email});
            res.json(inquiries);
            return;
        }else if(isItAdmin(req)){
            const inquiries=await Inquiry.find();
            res.json(inquiries);
            return;
        }else{
            res.status(401).json({
                message: "You are not authorized to view this page",
                })
                return;
        }
    }catch(e){
        res.status(500).json({
            message: "Error while fetching inquiries",
        })
    }
}
export async function deleteInquiry(req,res){
    try{
        if(isItAdmin(req)){
            const id=req.params.id;
            await Inquiry.deleteOne({id:id})
            res.json({
                message:"Inquiry deleted successfully"
                })
                return
            }else if(isItCustomer(req)){
                const id=req.params.id;
                const Inquiry=await Inquiry.findOne({id:id});
                if(Inquiry==null){
                    res.status(404).json({
                        message: "Inquiry not found",
                        })
                        return;
            }else{
                if(inquiry.email==req.user.email){
                    await Inquiry.deleteOne({id:id})
                    res.json({
                        message:"Inquiry deleted successfully"
                        })
                        return;
                }else{
                    res.status(401).json({
                        message: "You are not authorized to delete this inquiry",
                        })
                        return
                }
            }
            }else{
                res.status(401).json({
                    message: "You are not authorized to delete this inquiry",
                    })
                    return

            }
            }catch(e){
                res.status(500).json({
                    message: "Error while deleting inquiry"
                    })
                    }
        }
        export async function updateInquiry(req,res){
            try{
                if(isItAdmin(req)){
                    const id=req.params.id;
                    const updatedInquiry=req.body;
                    await Inquiry.updateOne({id:id},{$set:updatedInquiry})
                    res.json({
                        message:"Inquiry updated successfully"
                        })
                        return
                        }else if(isItCustomer(req)){
                            const id=req.params.id;
                            const updatedInquiry=req.body;
                            const Inquiry=await Inquiry.findOne({id:id});
                            if(Inquiry==null){
                                res.status(404).json({
                                    message: "Inquiry not found",
                                    })
                                    return;
                                    }else{
                                        if(Inquiry.email==req.user.email){

                                            await Inquiry.updateOne({id:id},{message:data.message})
                                            res.json({
                                                message:"Inquiry updated successfully"
                                                })
                                                return
                                                }else{
                                                    res.status(401).json({
                                                        message: "You are not authorized to update this inquiry",
                                                        })
                                                        return
                                                        }
                                                        }
                                                        }else{
                                                            res.status(401).json({
                                                                message: "You are not authorized to update this inquiry",
                                                                })
                                                                return
                                                                }
                                                                }catch(e){
                                                                    res.status(500).json({
                                                                        message: "Error while updating inquiry"
                                                                        })
                                                                        }
                                                                    }