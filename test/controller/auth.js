const modalUser=require("../modal/modalUser")
const jwt=require("jsonwebtoken");

const Auth= async(req,res)=>{
    const {password,username}=req.body;
    try {
        if(!password||!username){
            res.status(404).json({
                message:"is not username or password ",
            })
        }
        const existingUser= await modalUser.find({password,username});
        if(!existingUser){
            res.json({
                message: 'username or password does not correct',
              });
        }
        const payload={
            id:existingUser._id,
            username:existingUser.username,
        }
        const tocken=jwt.sign(payload,"test",
        {
            expiresIn:500
        }
       
        )
         res.status(200).json({
            tocken:tocken
         })
    } catch (error) {
        if(error instanceof jwt.JsonWebTokenError )
        {
            res.status(404).json({
                message:"Token is expired"
            })
        }else{
            res.status(500).json({
                error: error.message,
                stack: error.stack,});
        
        }
    }
}

module.exports=Auth;