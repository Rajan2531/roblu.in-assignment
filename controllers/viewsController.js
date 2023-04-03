const Product=require('./../models/productModel.js');
exports.getHomePage=async(req,res,next)=>{
    const products=await Product.find();

    res.render('home',{products:products})
}

exports.getAddProduct=(req,res,next)=>{
    res.render('addProduct');
}