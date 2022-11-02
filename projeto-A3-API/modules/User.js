const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const userSchema    = new Schema({
        name:   {
            type: String
        },
        email:   {
            type: String
        },
        phone:   {
            type: String
        },
        cpf:   {
            type: String
        },
        crm:   {
            type: String
        },
        especie:   {
            type: String
        },
        password:   {
            type: String
        }
}, {timestamps: true})

const User = mongoose.model('User',userSchema)
module.exports = User

/*
 const{ nome } = req.body
    const{email} = req.body
    const{telefone} = req.body
    const{cpf} = req.body
    const{crm} = req.body
    const{senha} = req.body
    const {especie} = req.body
*/