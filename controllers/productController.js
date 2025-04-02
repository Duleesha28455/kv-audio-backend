import Product from "../models/product.js";

export async function addProduct(req,res){
    console.log(req.user)

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

