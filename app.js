const fs=require("fs");
const express= require("express");
const app=express();
const path=require('path')
const morgan=require("morgan");
const helmet=require("helmet");


app.use(express.json());
app.use(morgan("dev"));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

const productRouter=require('./routes/productRoutes');
const viewRouter=require('./routes/viewRouter.js');



app.use('/',viewRouter)
app.use('/api/v1/products',productRouter);

module.exports=app;

