const mongoose=require("mongoose");
const Schema=mongoose.Schema
const ValidationUser=new Schema({
  
  sku:String,
  description:String,
  instock:Number,

})

module.exports=mongoose.model("inventorys",ValidationUser)