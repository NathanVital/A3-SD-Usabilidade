const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const userSchema    = new Schema({

    firstname: {type:String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    telefone: {type: String, required: true},
    cargo: {type: String, required: true}
    
}, {timestamps: true})

const User = mongoose.model('Employee',userSchema)
module.exports = User

