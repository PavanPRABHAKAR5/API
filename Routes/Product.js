const express = require("express");
const router = express.Router();
const productData = require("../Models/product")


router.get("/", async (req,res)=>{
    try{
        const result = await productData.find()
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



router.get("/:Electronics",async(req,res)=>{
    try{
        console.log(req.params);
        const inventoryUser= await productData.find({Product_type:req.params.Electronics});
        res.status(200).json({
        status:"success",
        data:inventoryUser
    })

    }catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }
})

router.get("/:Furniture",async(req,res)=>{
    try{
        console.log(req.params);
        const inventoryUser= await productData.find({Product_type:req.params.Furniture});
        res.status(200).json({
        status:"success",
        data:inventoryUser
    })

    }catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }
})


router.post("/", async (req,res)=>{
    try{
        let data = req.body;
        const result = await productData.create(data)
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
