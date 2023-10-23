const express=require("express")
const router=express.Router();
const getInventorys=require("../controller/inventorys");
const getInstock=require("../controller/invenInstock")

router.get("/insstock",getInstock)
router.get("/",getInventorys)
module.exports=router