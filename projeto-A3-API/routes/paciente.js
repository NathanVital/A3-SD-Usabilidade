const express = require('express')
const router = express.Router()

const Paciente = require('../modules/Paciente')

router.use(express.json())


router.post('/add',(req, res, next) => {
    
    let paciente = new Paciente ({

        firstname:  req.body.firstname,
        lastname:   req.body.lastname,
        sexo:       req.body.sexo,
        nascimento: req.body.nascimento,
        celular:    req.body.celular,
        telefone:   req.body.telefone,
        cpf:        req.body.cpf,
        endereco:   req.body.endereco,
        email:      req.body.email,
        ativo:      req.body.ativo
        
    })
    paciente.save()
    .then(paciente => {
        res.json({
            message : 'paciente created successfully!',
            paciente
        })
    }).catch(err => {
        res.status(500).json({
            message : "An error occured"+err
        }
        )
    })}
)

router.delete("/delete", (req, res, next) => {
    let pacienteID = req.body.pacienteID

    Paciente.findOneAndRemove(pacienteID)
    .then(() => {
       res.json({ 
        message: "paciente apagada"
    })
    })
    .catch((err) => {
        res.json({
            message: "um erro ocorreu"
        })
    })
})

router.put('/update', (req, res, next) => {
    let pacienteID = req.body.pacienteID

    let pacienteData = {
        firstname:  req.body.firstname,
        lastname:   req.body.lastname,
        sexo:       req.body.sexo,
        nascimento: req.body.nascimento,
        celular:    req.body.celular,
        telefone:   req.body.telefone,
        cpf:        req.body.cpf,
        endereco:   req.body.endereco,
        email:      req.body.email,
        ativo:      req.body.ativo
    }

    Paciente.findByIdAndUpdate(pacienteID, {$set: pacienteData})
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

})

router.post('/list', (req, res, next) => {

    const requestBody = req.body 
    try{
        Paciente.find(requestBody).then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = router

