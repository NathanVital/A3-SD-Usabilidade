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
                firstname:  req.body.firstname,
                email:      req.body.email,
                password:   req.body.password,
                telefone:   req.body.telefone,
                cargo:      req.body.cargo,
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

const update = (req, res, next) => {
    let userID = req.body.userID

    let userData = {
        firstname:  req.body.firstname,
        email:      req.body.email,
        password:   req.body.password,
        telefone:   req.body.telefone,
        cargo:      req.body.cargo
    }

    User.findByIdAndUpdate(userID, {$set: userData})
    .then(() =>{
        res.json({
            message: 'paciente modificada'
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            message: 'um erro ocorreu'
        })
    })

}

const dell =(req, res, next) => {
    let userID = req.body.userID

    User.findOneAndRemove(userID)
    .then(() => {
       res.json({ 
        message: "Usuário apagada"
    })
    })
    .catch((err) => {
        res.json({
            message: "um erro ocorreu",
            err
        })
    })
}

const list = (req, res, next) => {

        const requestBody = req.body

    try{
        User.find(requestBody).then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

}

const login = (req, res, next) => {
    let username = req.body.username
    let password = req.body.password

    User.findOne({$or: [{email:username},{telefone:username}]})
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
                message: err
            })
        } else {
            let token = jwt.sign({name: decode.name}, process.env.ACCESS_TOKEN_SECRET , {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME})
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
    refreshToken,
    dell, 
    list,
    update
}