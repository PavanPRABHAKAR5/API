const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const customerRoute = require("./Routes/Customer");
const orderRoute = require("./Routes/Order");
const productRoute = require("./Routes/Product");


mongoose.connect("mongodb://localhost/API_products")
.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("Error in connecting the database")
})

app.use(bodyParser());

app.use("/customer", customerRoute);
app.use("/product", productRoute);
app.use("/orders", orderRoute)

app.listen(3000, ()=>console.log("Server is running at 3000"))