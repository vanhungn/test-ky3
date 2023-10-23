const express=require("express")
const router=express.Router();
const addnewOrder=require("../controller/addOrderNew")

router.post("/",addnewOrder)
module.exports=router