import Product from "../models/product.js";
import { isItAdmin } from "./userController.js";

export async function addProduct(req,res){


    if(req.user==null){
        res.status(401).json({message: "please try again"})
        return
    }
    if(req.user.role !="admin"){
        res.status(403).json({
            message : "you are not authorized to perform this action"
        })
        return
    }

    const data=req.body;
    const newProduct=new Product(data);
    try{
        await newProduct.save();
        res.status(201).json({message: "product added successfully"})
    }catch(error){
        res.status(500).json({message: "error creating product", error: error})
    }
}
export async function getProducts(req,res){



    try{
        if(isItAdmin(req)){
        const products=await Product.find();
        res.json(products);
        return;
        }else{
        const products=await Product.find({availability:true});
        res.json(products);
        return;
        }
        }catch(error){
            res.status(500).json({message: "error fetching products", error: error})
            }
            }

export async function updateProduct(req,res){
    try{
        if(isItAdmin(req)){
            const key= req.params.key
            const data=req.body
            await Product.updateOne({key: key},data)
            res.json({message: "product updated successfully"})
            return;
        


        }else{
            res.status(403).json({
                message : "you are not authorized to perform this action"
            })
            return;
        }

    }catch(e){
        res.status(500).json({message: "error updating product", error: e})
    }
}
export async function deleteProduct(req,res){
    try{
        if(isItAdmin(req)){
            const key=req.params.key
            await Product.deleteOne({key: key})
            res.json({message: "product deleted successfully"})
            return;
            }else{
                res.status(403).json({
                    message : "you are not authorized to perform this action"
                    })
                    return;
                    }
                    }catch(e){
                        res.status(500).json({message: "error deleting product", error: e})
                        }

                    


                    }
