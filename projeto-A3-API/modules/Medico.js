const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const medicoSchema    = new Schema({

    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    occupation: {type:String, required: true},
    nascimento: {type:Date, required: true},
    celular: {type:String, required: true},
    telefone: {type:String, required: true},
    crm: {type:Number, required: true},
    uf: {type:String, required: true},
    email: {type:String, required: true},
    ativo: {type:Boolean, required: true},
}, {timestamps: true})

const Medico = mongoose.model('Medico',medicoSchema)
module.exports = Medico

