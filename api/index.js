require('dotenv').config();
const cors      = require('cors')
const express   = require('express');
const app       = express();
app.use(express.json())
app.use(cors());
const port=process.env.PORT || 5000;
const userRoutes    = require('../routes/userroutes');
const productRoutes = require('../routes/productRoutes');
const connectDB = require('../db/config');
app.use('/',userRoutes);
app.use('/',productRoutes);
connectDB().then(()=>{
    app.listen(port,()=>{
            console.log(`Server running on port ${port}`); 
    });
})
module.exports=app;