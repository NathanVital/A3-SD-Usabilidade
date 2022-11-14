const express =     require("express")
const mongoose =    require("mongoose")
const dotenv =      require("dotenv")

dotenv.config()


// mongo connection
console.log(process.env.HOST + "\n")
mongoose.connect('mongodb://'+process.env.HOST+':27017/testdb',{useNewUrlParser: true, useUnifiedTopology: true})
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


app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT , () => {
    console.log("listen on port :"+ PORT)
})

app.use('/user', AuthRoute)
app.use('/consulta',Authentication , ConsultaRoute) 
app.use('/paciente',Authentication , PacienteRoute) 
