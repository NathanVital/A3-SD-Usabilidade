const express = require('express')
const router = express.Router()

const Consulta = require('../modules/Consulta')

router.use(express.json())


router.post('/add',(req, res, next) => {
    let consulta = new Consulta ({
        data:   req.body.data,//'2022-11-02T15:00',
        cpf:   req.body.cpf,//"123.456.789.00",
        status:   "agendado",
        crm:   req.body.crm//"12345678-9/UF"
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

router.get('/list', (req, res, next) => {
    try{
        Consulta.find().then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = router

