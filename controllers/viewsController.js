const Product=require('./../models/productModel.js');

// controller function to inject product data into home page and render home page.
exports.getHomePage=async(req,res,next)=>{
    const products=await Product.find();

    res.render('home',{products:products})
}


// controller function to render form for adding new product details
exports.getAddProduct=(req,res,next)=>{
    res.render('addProduct');
}