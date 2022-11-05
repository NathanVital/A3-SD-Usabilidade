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

const User = mongoose.model('Employee',userSchema)
module.exports = User

