const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const consultaSchema    = new Schema({
        data:   {
            type: Date
        },
        cpf:   {
            type: String
        },
        status:   {
            type: String
        },
        crm:   {
            type: String
        }
}, {timestamps: true})

const Consulta = mongoose.model('Consulta',consultaSchema)
module.exports = Consulta

