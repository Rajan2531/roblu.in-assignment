const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    productID:{
        type:String,
        required:[true,"Product Id must be there"],
        unique:true
    },
    name:{
        type:String,
        required:[true, "Name must be there"]
    },
    price:{
        type:Number,
        required:[true, "Price must be there"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:mongoose.Decimal128,

    },
    createdAt:{
        type:Date,
        required:[true, "creation date is must"]
    },
    company:{
        type:String,
        required:[true,"company name is must"]
    }

})

const Product=mongoose.model("Product",productSchema);


module.exports=Product