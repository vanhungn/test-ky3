const mongoose=require("mongoose");
const Schema=mongoose.Schema
const ValidationOrder=new Schema({
   item:String,
   price:String,
   quantity:String

})

module.exports=mongoose.model("orders",ValidationOrder)