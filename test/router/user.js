const express=require("express")
const router=express.Router();
const dataUser=require("../controller/getAllUsers")

router.get("/",dataUser)
module.exports=router