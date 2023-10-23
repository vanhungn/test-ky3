const express=require("express")
const router=express.Router()
const verify=require("../middleware/verify")
const postLogin=require("../controller/login")

 router.post("/",verify,postLogin)
module.exports=router