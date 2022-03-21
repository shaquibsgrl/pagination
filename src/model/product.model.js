const mongoose=require("mongoose");

const productSchema=new mongoose.Schema(
{
title:{type:String,required:true},
price:{type:String,required:true},
product_image_url:{type:String,required:true},
sellerEmail:{type:String,reuired:true}

},
{
    versionKey:false,
    timestamps:true,
}

);

const Product=mongoose.model("products",productSchema);

module.exports=Product;