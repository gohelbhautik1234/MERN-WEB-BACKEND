
const JWT=require('jsonwebtoken');
require('dotenv').config();

const verifytoken=(req, resp, next)=> {
    let token = req.headers['authorization'];
    if (token) {
        JWT.verify(token, process.env.JWT_SECRET, (err, valid) => {
            if (err) {
                resp.send("Please provide valid token");
            }
            else {
                next();
            }
        })
    }
    else {
        resp.send("Please add the token header");
    }
}

module.exports = verifytoken;