const express=require("express");

const productcontroller=require("./controller/product.controller");



const app=express();

app.use(express.json())



app.use("/products",productcontroller)//midlleware

module.exports=app