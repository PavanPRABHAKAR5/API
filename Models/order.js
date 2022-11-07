const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customer_id:{type:String, required:true},
    Product_id:{type:String, required:true},
    Product_name:{type:String, required:true},
    quantity:{type:Number, required:true}
})

const orderData = mongoose.model("order", orderSchema)
module.exports = orderData;