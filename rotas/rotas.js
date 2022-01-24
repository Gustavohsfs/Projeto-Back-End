const Cadastro = require('../models/function')
const verifyJWT = require('../middleware/verifyJWT')

module.exports = app => {
   

    //Buscar por estado
    app.get('/usuario/estado/:id', verifyJWT, (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.listarUsuariosPorEstado(id)
            .then(resultados => res.status(200).json(resultados))
            .catch(erro => res.status(400).json(erro))
    })

    //Buscar usuario por email
    app.post('/usuario/email', verifyJWT, (req, res) => {
        const email = req.body.email

        Cadastro.buscarPorEmail(email)
            .then(resultados => res.status(200).json(resultados))
            .catch(erro => res.status(400).json(erro))
    })

    //Efetuar Logout
    const blacklist = []
    app.post('/usuario/logout', verifyJWT, (req,res) => {

        blacklist.push(req.headers['x-access-token'])
        res.status(202).json({message: 'Logout efetuado'})
    })
}