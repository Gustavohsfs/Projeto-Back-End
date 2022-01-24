const repositorio = require('../repositorio/repositorio')
const exibir = require('../repositorio/exibirResultados')

class Model {
    adicionarUsuario(cadastro) {

        return repositorio.adicionarUsuarioRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarCidade(cadastro) {
        
        return repositorio.adicionarCidadeRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarEstado(cadastro) {

            return repositorio.adicionarEstadoRep(cadastro)
            .then(resultados => {
                const id = resultados.insertId

                return {...cadastro, id}
            })
    }

    listarUsuarios() {

        return exibir.listarUsuariosRep()
    }

    listarUsuariosID(id) {

        return exibir.listarUsuariosIDRep(id)
    }

    atualizarCadastro(id, valores) {

        return repositorio.atualizarCadastroRep(id, valores)
    }

    deletarCadastro(id) {

        return repositorio.deletarCadastroRep(id)
    }

    listarUsuariosPorEstado(id) {

        return exibir.listarUsuariosPorEstadoRep(id)
    }

    buscarPorEmail(email) {

        return exibir.buscarPorEmailRep(email)
    }

}

module.exports = new Model