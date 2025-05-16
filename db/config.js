require('dotenv').config();//load .env file
const  mongoose = require("mongoose");

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MonogDB Connected");
    }
    catch(err)
    {
        console.log("MongoDB Connection Failed", err.message);
        process.exit(1);
    }
}

module.exports=connectDB;
