const express=require("express")
const router=express.Router()
const auth=require("../controller/auth")
const postLogin=require("../controller/login")

router.post("/",auth,postLogin)
module.exports=router