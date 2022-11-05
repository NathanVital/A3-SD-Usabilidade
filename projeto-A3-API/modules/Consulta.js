const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

const consultaSchema    = new Schema({
        data:   {
            type: Date //'2022-11-02T15:00',
        },
        cpf:   {
            type: String
        },
        status:   {
            type: String
        },
        crm:   {
            type: String
        },
        obs:   {
            type: String
        },
}, {timestamps: true})

const Consulta = mongoose.model('Consulta',consultaSchema)
module.exports = Consulta

