const jwt=require("jsonwebtoken");

const Verify=(req,res,next)=>{
        const accessTocken=req.headers["access-tocken"];
        try {
            if(!accessTocken){
                res.status(404).json({
                    message:"accessTocken undefiled",
                    data:null
                })
            }
         jwt.verify(accessTocken,"test")
         next();
        } catch (error) {
            if(error instanceof jwt.JsonWebTokenError)
            {
                res.status(404).json({
                    message: 'Token is expired'
                })
            }else{
                res.status(500).json({
                    error: error.message,
                    stack: error.stack,});
            }
        }


}

module.exports=Verify