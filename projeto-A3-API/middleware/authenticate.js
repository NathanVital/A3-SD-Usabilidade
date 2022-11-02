const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    try{

        const token = req.headersauthorization.split(' ')[1]
        const decode = jwt.verify(token, "change this")

        req.user = decode
        next()
    }
    catch(error) {
        res.json({
            message: "Authentication faild!"
        })
    }
}

module.exports = authenticate