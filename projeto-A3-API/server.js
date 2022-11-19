const express =     require("express")
const mongoose =    require("mongoose")
const dotenv =      require("dotenv")
const cors =      require("cors")

dotenv.config()
 
// mongo connection
console.log(process.env.HOST + "\n")
mongoose.connect(process.env.HOST,{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection 

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection established!')
})

//express server
const app =  express()

const AuthRoute =   require('./routes/auth')
const ConsultaRoute =   require('./routes/consulta')
const Authentication = require("./middleware/authenticate")
const PacienteRoute = require("./routes/paciente")
const MedicoRoute = require("./routes/medico")


app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT , () => {
    console.log("listen on port :"+ PORT)
})

app.use(cors())

app.use('/user', AuthRoute)
app.use('/consulta',Authentication , ConsultaRoute) 
app.use('/paciente',Authentication , PacienteRoute) 
app.use('/medico',Authentication , MedicoRoute) 
