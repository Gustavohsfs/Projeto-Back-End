const Cadastro = require('../models/function')
const verifyJWT = require('../middleware/verifyJWT')
 
module.exports = app => {
    app.get('/usuario/estado/:id', verifyJWT, (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.listarUsuariosPorEstado(id)
            .then(resultados => res.status(200).json(resultados))
            .catch(erro => res.status(400).json(erro))
    })
}