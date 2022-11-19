const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const consultaSchema    = new Schema({
    agenda: {type:String, required: true},
    occupation: {type:String, required: true},
    medico: {type:String, required: true},
    data: {type:Date, required: true},
    horario: {type:String, required: true},
    paciente: {type:String, required: true},
    celular: {type:String, required: true},
    telefone: {type:String, required: true},
    cpf: {type:String, required: true},
    observacoes: {type:String},
    retorno: {type:Boolean, required: false},
}, {timestamps: true})

const Consulta = mongoose.model('Consulta',consultaSchema)
module.exports = Consulta

