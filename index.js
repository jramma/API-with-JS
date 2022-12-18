import path from 'path';
const mongoose = require("mongoose");
//<password>
mongoose.connect('mongodb+srv://user:@cluster0.tix7cgn.mongodb.net/?retryWrites=true&w=majority');
mongoose.set('strictQuery', false);

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({ username: 'user 2', edad: 24 })
    const savedUser = await user.save()
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}
// buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'user 1' })
    console.log(user)
}


const buscarUno = async () => {
    const user = await User.findOne({ username: 'user 1' })
    console.log(user)
}

const actualizar = async () => {
    const user = await User.findOne({ username: 'user 1' })
    user.edad = 30
    await user.save()
}

const eliminar = async () => {
    const user = await User.findOne({ username: 'user 1' })
    if (user) {
        await user.remove()
    }
}
