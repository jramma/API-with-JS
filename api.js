const express = require('express')
const mongoose = require('mongoose')
const User = require('./user.controller')
const app = express()
const port = 3000
const path = require('path');

app.use(express.json())

mongoose.connect('mongodb+srv://user:<password>@cluster0.tix7cgn.mongodb.net/?retryWrites=true&w=majority');

app.get('/users', User.list)
app.post('/users', User.create)
app.get('/users/:id',User.get)
app.put('/users/:id',User.update)
app.patch('/users/:id',User.update)
app.delete('/users/:id',User.destroy)

app.use(express.static('app'))


app.get('/',(req,res)=>{
    const dirPath= path.join(__dirname,'/index.html' )
    res.sendFile(dirPath)
})

app.get('*', (req,res)=>{
    res.status(404).send('esta página no existe')
})

app.post('*', (req,res)=>{
    res.status(404).send('esta página no existe')
})

app.listen(port, () => {
    console.log('Arrancando app')
})