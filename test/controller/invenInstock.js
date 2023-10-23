const insTock=require("../modal/modelOrders")

const getInstock=async(req,res)=>{
    try {
        const inven= await insTock.find({quantity:{$gt:100}})
        res.status(200).json(inven)
    } catch (error) {
        res.status(404).json({
            message:"not found inven",
            data:null
        })
    }
}
module.exports=getInstock