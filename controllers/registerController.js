const usermodel=require('../models/users')
const JWT = require('jsonwebtoken')
require('dotenv').config();
const registeruser=async (req, resp) => {
    let user = new usermodel(req.body);
    let data = await user.save();
    data = data.toObject();
    delete data.password;
    JWT.sign({ data }, process.env.JWT_SECRET, { expiresIn: '2h' }, (err, token) => {
        if (err) {
            resp.send("Something went wrong");
        }
        resp.send({ data, auth: token });
    })
}

module.exports = registeruser;
