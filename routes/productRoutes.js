const express=require('express');

const { getproduct, addproduct, editproduct, updateproduct, deleteproduct, searchproduct }=require("../controllers/productController");
const verifytoken=require("../middleware/authMiddleware");

const productrouter=express.Router();

productrouter.get("/getproduct",getproduct);
productrouter.post("/addproduct", verifytoken,addproduct);
productrouter.get("/getproduct/:id", verifytoken,editproduct);
productrouter.put("/updateproduct", verifytoken,updateproduct);
productrouter.delete("/deleteproduct/:id", verifytoken,deleteproduct);
productrouter.get("/searchproduct/:key",searchproduct);

module.exports=productrouter;