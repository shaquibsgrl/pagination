const express =require("express");
const app = require("../index");
const Product = require("../model/product.model");

const transporter=require("../config/mail")



const router=express.Router();

// const app=express()
// console.log(router)

router.get("/",async(req,res)=>{
  try {

      const page=req.query.page||1;
      const pagesize=req.query.pagesize||10;

      const skip=(page-1)*pagesize
      const products=await Product.find().skip(skip).limit(pagesize).lean().exec();

      const totalpages=Math.ceil((await Product.find().countDocuments())/pagesize)

      return res.status(200).send({products,totalpages})
      
  } catch (err) {
      return res.status(500).send({message:err.message})
  }

});

router.post("/",async(req,res)=>{

try {

  const product=await Product.create(req.body);

   transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: product.sellerEmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello pushkar?", // plain text body
    html: "<b>Hello pushkar?</b>", // html body
  });

  return res.status(200).send({message:"product created sucessfully"})
  
} catch (err) {
  return res.status(500).send({message:err.message})
}

})

module.exports=router;