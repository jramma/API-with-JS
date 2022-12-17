const express = require('express')
const User = require('./user.controller')
const app = express()
const port = 3000

app.get('/', User.list)
app.post('/', User.create)
app.get('/:id',User.get)
app.put('/:id',User.update)
app.patch('/:id',User.update)
app.delete('/:id',User.destroy)

app.listen(port, () => {
    console.log('Arrancando app')
})