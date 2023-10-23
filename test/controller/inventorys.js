const modelInven= require("../modal/modalInventorys")

const getInven=async(req,res)=>{
    try {
        const inven= await modelInven.find({})  
        res.status(200).json(inven)
    } catch (error) {
        res.status(404).json({
            message:"not found inven",
            data:null
        })
    }
}

module.exports=getInven