const Cadastro = require('../models/function')
const verifyJWT = require('../middleware/verifyJWT')
 
module.exports = app => {
    app.patch('/usuario/cadastro/:id', verifyJWT, (req, res) => {
        const valores = req.body
        const id = parseInt(req.params.id)

        Cadastro.atualizarCadastro(id, valores)
            .then(resultados => res.status(200).json({ id, ...valores, ...resultados }))
            .catch(erro => res.status(400).json(erro))
    })
}