const express =     require("express")
const mongoose =    require("mongoose")


// mongo connection
mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser: true, useUnifiedTopology: true})
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

app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT , () => {
    console.log("listen on port :"+ PORT)
})

app.use('/user', AuthRoute) 
