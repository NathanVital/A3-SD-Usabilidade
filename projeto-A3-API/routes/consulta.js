const express = require('express')
const router = express.Router()

const Consulta = require('../modules/Consulta')

router.use(express.json())


router.post('/add',(req, res, next) => {
    
    let consulta = new Consulta ({
        data:   req.body.data,//'2022-11-02T15:00',
        cpf:   req.body.cpf,//"123.456.789.00",
        status:   req.body.status,
        crm:   req.body.crm,//"12345678-9/UF",
        obs: req.body.obs
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

router.post('/update', (req, res, next) => {
    let consultaID = req.body.consultaID

    let consultaData = {
        data:   req.body.data,//'2022-11-02T15:00',
        cpf:   req.body.cpf,//"123.456.789.00",
        status:   req.body.status,
        crm:   req.body.crm,//"12345678-9/UF",
        obs: req.body.obs
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

router.get('/list', (req, res, next) => {
    try{
        Consulta.find(req.body).then((response) =>{
            res.status(200).json({response})
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = router

