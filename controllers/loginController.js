const usermodel=require('../models/users')
const JWT = require('jsonwebtoken')
require('dotenv').config();
const login=async (req, resp) => {
    let data = await usermodel.findOne(req.body, { _id: 1, name: 1, email: 1 });
    console.log(data);
    if (typeof (data) == 'object' && data!=null) {
        JWT.sign({ data }, process.env.JWT_SECRET, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                resp.send("Something went wrong");
            }
            resp.send({ data, auth: token });
        })
    }
    else {
        resp.send("Email and Password is Incorrect");
    }
}

module.exports = login;
