const Cadastro = require('../models/function')
const verifyJWT = require('../middleware/verifyJWT')
 
module.exports = app => {
    app.get('/usuario', verifyJWT, (req, res) => {

        Cadastro.listarUsuarios()
            .then(resultados => res.status(200).json(resultados))
            .catch(erro => res.status(400).json(erro))
    })
}
 

