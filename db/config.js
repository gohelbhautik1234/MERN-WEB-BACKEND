require('dotenv').config();//load .env file
const  mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=>console.log('DB Connected')).catch((err)=>console.error('DB Error:', err));

