import Review from "../models/review.js";

export function addReview(req,res){
    if(req.user==null){
        res.status(401).json({
            message: "You must be logged and try again"
        });
        return;
    }
    const data= req.body;
    data.name=req.user.firstName + " " + req.user.lastName;
    data.profilePicture=req.user.profilePicture;
    data.email=req.user.email;

    const newReview = new Review(data)
    newReview.save().then(()=>{
        res.json({message:"Review added successfully"});
        }).catch((err)=>{
            res.status(500).json({error:"Review addition failed"});
    });

}
export  async function getReviews(req,res){
    const user=req.user;
try{
    if(user.role=="admin"){
    const reviews=await Review.find();
    res.json(reviews);
    }else{
        const reviews=await Review.find().where("user").equals(user._id);
        res.json(reviews);
    }
    
}
catch(e){
    res.status(500).json({error:e.message});
    }
    
}
export function deleteReview (req,res){
    const email=req.params.email;

if(req.user==null){
    res.status(401).json({
        message: "You must be logged and try again"
        });
        return;
}
if(req.user.role=="admin"){
    Review.deleteOne
    ({email:email}).then(()=>{
        res.json({message:"Review deleted successfully"});
        }).catch((err)=>{
            res.status(500).json({error:"Review deletion failed"});
            });
            return
}
if(req.user.role=="customer"){
    if(req.user.email==email){
        Review.deleteOne
        ({email:email}).then(()=>{
            res.json({message:"Review deleted successfully"});
            }).catch((err)=>{
                res.status(500).json({error:"Review deletion failed"});
                });
    }else{
        res.status(403).json
        ({message:"you are not authorized to perform this action"});
    }
}

    }

export function approveReview(req,res){
    const email=req.params.email;

    if(req.user==null){
        res.status(401).json({
            message: "You must be logged and try again"
            });
            return;
    }
    if(req.user.role=="admin"){
        Review.updateOne
        (
            {
            email:email
        },
        {
         isApproved:true,
        
        }
    ).then(()=>{
        res.json({message:"Review approved successfully"});
        }).catch(()=>{
            res.status(500).json({error:"Review approval failed"});
            });
    }else{
        res.status(403).json
        ({message:"you are not authorized to perform this action"});
    }
}