const mongoose=require("mongoose");
const Schema=mongoose.Schema
const ValidationUser=new Schema({
    username:String,
    password:String

})

module.exports=mongoose.model("users",ValidationUser)