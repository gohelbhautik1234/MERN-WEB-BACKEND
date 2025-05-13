require('dotenv').config();
require("./db/config")
const cors      = require('cors')
const express   = require('express');
const app       = express();
app.use(express.json())
app.use(cors());
const userRoutes    = require('./routes/userroutes');
const productRoutes = require('./routes/productRoutes');
app.use('/',userRoutes);
app.use('/',productRoutes);
app.listen(process.env.PORT || 5000);