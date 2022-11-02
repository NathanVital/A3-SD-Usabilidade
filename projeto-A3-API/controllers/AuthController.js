const User      = require("../modules/User")
const bcrypt    = require("bcryptjs")
const jwt       = require("jsonwebtoken")
const { response } = require("express")

const register  = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
            if(err) {
                res.json({
                    message : err
                })
            }

            let user = new User ({
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                cpf : req.body.cpf,
                crm : req.body.crm,
                especie : req.body.especie,
                password : hashedPass 
            })
            user.save()
            .then(user => {
                
                res.json({
                    message : 'User created successfully!',
                    user
                })
            }).catch(err => {
                res.status(500).json({
                    message : "An error occured"+err
                }
                )
            })
            
    })
}

const login = (req, res, next) => {
    let username = req.body.username
    let password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then( user => {
        if(user){
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({name: user.name}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME})
                    let refreshtoken = jwt.sign({name: user.name}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME})
                    res.json({
                        message: 'login successful',
                        token,
                        refreshtoken
                    })
                }else{
                    res.status(400).json({
                        message: "Password does not match"
                    })
                }

            })
        }else{
                    res.status(404).json({
                        message: "user not found"
                    })
                }
    })
}

const refreshToken = (req, res, next) => {
    const refreshToken = req.body.refreshToken
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decode) => {
        if(err) {
            response.status(400).json({
                err
            })
        } else {
            let token = jwt.sign({name: decode.name}, precess.env.ACCESS_TOKEN_SECRET , {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME})
            let refreshToken = req.body.refreshToken
            res.status(200).json({
                message: "Token refreshed successfully!",
                token,
                refreshToken
            })
        }
    })
}

module.exports = {
    register,
    login,
    refreshToken
}