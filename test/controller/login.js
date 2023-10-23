const modalOrder=require("../modal/modelOrders")

const postLogin=async(req,res)=>{
    try {
        const result=await modalOrder.find({})
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({
            message:"not found inven",
            data:null
        })
    }
}
module.exports=postLogin