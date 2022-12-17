const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Haciendo GET')

})


app.post('/', (req, res) => {
    res.status(201).send("Haciendo POST")
})

app.put('/:id',(req,res)=>{
    res.sendStatus(204)

})
app.patch('/:id',(req,res)=>{
    res.sendStatus(204)

})
app.delete('/:id',(req,res)=>{
    res.sendStatus(204)

})


app.listen(port, () => {
    console.log('Arrancando app')
})