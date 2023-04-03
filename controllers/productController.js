const Product=require('./../models/productModel.js');


// controller function to handle post request for creating new product in database
exports.createProduct=async(req,res)=>{
    try{
        console.log(req.body);
        const newProd={
            productID:req.body.productID,
            name:req.body.name,
            price:req.body.price*1,
            featured:req.body.fratured=="true"?true:false,
            rating:req.body.rating,
            createdAt:req.body.createdAt,
            company:req.body.company
        };
    const newProduct=await Product.create(newProd);
    res.status(201).json({
        status:"success",
        data:newProduct
    })
    }
    catch(err)
    {
        res.status(404).json({
            status:"failed",
            message:err
        })
    }
}


// controller function to handle get request for fetching all product related data from database
exports.getAllProducts=async (req,res)=>{
    try{
        const query=req.query;
        console.log(req.query);
        const queryObj={...query};

        const queryStr=JSON.stringify(queryObj);
        
        const queryStr1=queryStr.replace(/\b(lt|gt)\b/g, match=>`$${match}`);
       
    const products=await Product.find(JSON.parse(queryStr1));
    res.status(200).json({
        status:"success",
        data:products
    })
    }
    catch(err)
    {
        res.status(404).json({
            status:"failed",
            message:err
        })
    }
}


// controller function to handle put or patch request for updating any product data in database
exports.updateProduct= async( req, res)=>{
    try{
        console.log(req.params.id);
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators:true
        });
        res.status(200).json({
            status:"success",
            data:{
                product:updatedProduct
            }
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"failed",
            message:err
        })
    }
}



// controller function to handle delete http request for deleting any product data from database 
exports.deleteAProduct=async(req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"success",
            data:null
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"failed",
            message:err
        })
    }
}

// controller function to handle get http request for fetching all featured product details
exports.getFeaturedProducts=async(req,res)=>{
    try{
    const products=await Product.find({featured:true})
        res.status(200).json({
            status:"success",
            data:products
        })
    }
    catch(err)
    {
        res.status(400).json({
            message:err
        })
    }
}

