const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    try{

        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        req.user = decode
        next()
    }
    catch(error) {
        if(error.name == "TokenExpiredError")
        {
            res.status(401).json({
                message: "Token Expired!"
            })
        }
        else {
            res.status(400).json({
            message: "Authentication faild!"
        })}
    }
}

module.exports = authenticate