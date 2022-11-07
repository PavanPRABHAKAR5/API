const express = require("express");
const router = express.Router();
const productData = require("../Models/product");
const customerData = require("../Models/customer")
const orderData = require("../Models/order")

router.get("/", async (req,res)=>{
    try{
        const order = await orderData.find()
    res.status(200).json({
        status:"Success",
        order
    })
    }catch(err){
        res.status(400).json({
            status:"Failed",
            message:err.message
        })
    }
})

router.get("/:orderID", async (req,res)=>{
    try{
        const result = await productData.find({Product_id:req.params.orderID})
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

router.post("/" , async (req,res)=>{
    try{
        const {customer_id,  Product_id, Product_name, quantity} =req.body
        const check_1 = await productData.findOne({Product_name:Product_name});
       
        if(quantity<check_1.Available_quantity){
            const orders= await orderData.create(req.body);
           return  res.status(200).json({
                status:"ITEM IS IN STOCK",
                message:"order is placed",
                orders
            })
        }else{
            return res.status(400).json({
                status:"ITEM IS OUT OF STOCK",
                message:"Please come back later"
            })
        }
    }catch(err){
        res.status(400).json({
            status:"Failed",
            message:err.message
        })
    }
})

module.exports = router;
