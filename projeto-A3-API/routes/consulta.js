const express = require('express')
const router = express.Router()

const Consulta = require('../modules/Consulta')

router.use(express.json())


router.post('/add',(req, res, next) => {
    
    let consulta = new Consulta ({
        agenda:             req.body.agenda,
        occupation:         req.body.occupation,
        medico:             req.body.medico,//"12345678-9/UF"
        data:               req.body.data,//'2022-11-02T15:00'
        horario:            req.body.horario,
        paciente:           req.body.paciente,
        celular:            req.body.celular,
        telefone:           req.body.telefone,
        cpf:                req.body.cpf,
        observacoes:        req.body.observacoes
    })
    consulta.save()
    .then(consulta => {
        res.json({
            message : 'consulta created successfully!',
            consulta
        })
    }).catch(err => {
        res.status(500).json({
            message : "An error occured"+err
        }
        )
    })}
)

router.delete("/delete", (req, res, next) => {
    let consultaID = req.body.consultaID

    Consulta.findOneAndRemove(consultaID)
    .then(() => {
       res.json({ 
        message: "consulta apagada"
    })
    })
    .catch((err) => {
        res.json({
            message: "um erro ocorreu"
        })
    })
})

router.put('/update', (req, res, next) => {
    let consultaID = req.body.consultaID

    let consultaData = {
    agenda:             req.body.agenda,
    occupation:         req.body.occupation,
    medico:             req.body.medico,
    data:               req.body.data,
    horario:            req.body.horario,
    paciente:           req.body.paciente,
    celular:            req.body.celular,
    telefone:           req.body.telefone,
    cpf:                req.body.cpf,
    observacoes:        req.body.observacoes
    }

    Consulta.findByIdAndUpdate(consultaID, {$set: consultaData})
    .then(() =>{
        res.json({
            message: 'consulta modificada'
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            message: 'um erro ocorreu'
        })
    })

})

router.post('/list', (req, res, next) => {

    const requestBody = req.body
    try{
        Consulta.find(requestBody).then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = router

