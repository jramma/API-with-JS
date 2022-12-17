const User ={
    list:(req,res)=>{
        res.status(200).send('Hola user')
    },
    create : (req,res)=>{
        res.status(201).send("creando user")
    },
    update: (req,res)=>{
        res.status(204).send('actualizando user')
    },
    destroy: (req,res)=>{
        res.status(204).send('eliminando user')
    },
    get:(req,res)=>{
        res.status(200).send('este es un usuario')
    }

}

module.exports = User





