
const modelUser=require("../modal/modalUser");
const GetAllUser= async(req,res)=>{
    try {
        const user=await modelUser.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({
            message:"error get all data",
            data:null,
        })
    }
}
module.exports=GetAllUser;