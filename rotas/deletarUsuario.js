const Cadastro = require('../models/function')
const verifyJWT = require('../middleware/verifyJWT')
 
module.exports = app => {
    app.delete('/usuario/cadastro/:id', verifyJWT, (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.deletarCadastro(id)
            .then(resultados => res.status(200).json({ id, ...resultados }))
            .catch(erro => res.status(400).json(erro))
    })
}