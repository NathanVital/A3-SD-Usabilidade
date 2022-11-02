const express = require('express')
const router = express.Router()

router.use(express.json())

const consulta =[]
let organizer = 0

router.post('/clinica/consulta',(req, res) =>{
    organizer++
    try {
        const exame = req.body
        //consulta [organizer] = {'id' :organizer, 'descricao': exame.descricao , 'dateTime': exame.dateTime, 'paciente': exame.paciente , 'medico': exame.medico , 'status': 'agendado'}
        
        res.status(200).send(consulta [organizer])
        
    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
})

router.get('/clinica/consulta', (req,res) => {
    try{
        res.status(200).send(consulta)
    }
    catch(err){
        res.status(500).send(consulta)
    }

})

module.exports = router

