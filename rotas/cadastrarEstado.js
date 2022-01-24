const verifyJWT = require('../middleware/verifyJWT')
const Cadastro = require('../models/function')
 
module.exports = app => {
    app.post('/estado/cadastro', verifyJWT, (req, res) => {
        const cadastro = req.body

        Cadastro.adicionarEstado(cadastro)
            .then(cadastro => res.status(201).json(cadastro))
            .catch(erro => res.status(400).json(erro))
    })
}