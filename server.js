const mongoose=require("mongoose");
const dotenv=require('dotenv');
const app=require('./app.js');

dotenv.config({path:'./config.env'});

const db=process.env.DATABASE_URL.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(db, {
    useNewUrlParser:true,
    
}).then(con=>{
    
    console.log("db connection successful");
})




app.listen(process.env.PORT||3000,()=>{
    console.log("server is running ");
})