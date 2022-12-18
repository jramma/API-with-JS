const express = require('express')
const mongoose = require('mongoose')
const User = require('./user.controller')
const app = express()
const port = 3000


app.use(express.json())
mongoose.connect('mongodb+srv://user:<password>@cluster0.tix7cgn.mongodb.net/?retryWrites=true&w=majority');

app.get('/', User.list)
app.post('/', User.create)
app.get('/:id',User.get)
app.put('/:id',User.update)
app.patch('/:id',User.update)
app.delete('/:id',User.destroy)

app.get('*', (req,res)=>{
    res.status(404).send('esta página no existe')
})
app.post('*', (req,res)=>{
    res.status(404).send('esta página no existe')
})
app.listen(port, () => {
    console.log('Arrancando app')
})