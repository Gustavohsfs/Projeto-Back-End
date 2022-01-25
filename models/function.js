const Usuario = require('../repositorio/usuarios')
const Exibir = require('../repositorio/exibirResultados')
const Cidade = require('../repositorio/cadastrarCidade')
const Estado = require('../repositorio/cadastrarEstado')

class Model {
    adicionarUsuario(cadastro) {

        return Usuario.adicionarUsuarioRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarCidade(cadastro) {
        
        return Cidade.adicionarCidadeRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarEstado(cadastro) {

            return Estado.adicionarEstadoRep(cadastro)
            .then(resultados => {
                const id = resultados.insertId

                return {...cadastro, id}
            })
    }

    listarUsuarios() {

        return Exibir.listarUsuariosRep()
    }

    listarUsuariosID(id) {

        return Exibir.listarUsuariosIDRep(id)
    }

    atualizarCadastro(id, valores) {

        return Usuario.atualizarCadastroRep(id, valores)
    }

    deletarCadastro(id) {

        return Usuario.deletarCadastroRep(id)
    }

    listarUsuariosPorEstado(id) {

        return Exibir.listarUsuariosPorEstadoRep(id)
    }

    buscarPorEmail(email) {

        return Exibir.buscarPorEmailRep(email)
    }

}

module.exports = new Model