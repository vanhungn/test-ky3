const addNew=require("../modal/modelOrders")
const addnewOrder=async(req,res)=>{
    const {item,price,quantity}=req.body
    try {
        if(!item||!price||!quantity)
        {
            res.status(404).json({
                message:"is not item or price or quantity"
            })
        }
        const newStudents= new addNew({
            item,
            price,
            quantity
        })
        await newStudents.save();
        const results=await addNew.find({});
        res.json(results)
    } catch (error) {
        res.status(404).json({
            message:"error severs"
        })
    }
}

module.exports=addnewOrder;