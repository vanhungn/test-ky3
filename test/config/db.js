const mongoose=require("mongoose");

const connectData=async()=>{
    const dbUrl="mongodb://0.0.0.0:27017/test";
    try {
        await mongoose.connect(dbUrl);
        console.log("connect succesfully")
    } catch (error) {
        console.log(" Can not connect ")
    }
}
module.exports=connectData
