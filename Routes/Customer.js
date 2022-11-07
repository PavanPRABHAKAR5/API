const express = require("express");
const router = express.Router();
const customerData = require("../Models/customer")

router.get("/", async (req,res)=>{
    try{
        const result = await customerData.find()
        res.status(200).json({
            status:"Success",
            data: result
        })
    }catch(err){
        res.status(400).json({
            status:"Failed",
            message:err.message
        })
    }
})

router.get("/:customerID", async (req,res)=>{
    try{
        let data = req.body;
        const result = await customerData.find({customer_id:req.params.customerID})
        res.status(200).json({
            status:"Success",
            data: result
        })
    }catch(err){
        res.status(400).json({
            status:"Failed",
            message:err.message
        })
    }
})

router.post("/", async (req,res)=>{
    try{
        let data = req.body;
        const result = await customerData.create(data)
        res.status(200).json({
            status:"Success",
            result
        })
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message:err.message
        })
    }
})




module.exports = router;
