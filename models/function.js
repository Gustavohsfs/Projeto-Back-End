const conexao = require('../infraestrutura/conexao')
const repositorio = require('../repositorio/repositorio')

class Cadastrar {
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

        return repositorio.listarUsuariosRep()
    }

    listarUsuariosID(id) {

        return repositorio.listarUsuariosIDRep(id)
    }

    atualizarCadastro(id, valores) {

        return repositorio.atualizarCadastroRep(id, valores)
    }

    deletarCadastro(id) {

        return repositorio.deletarCadastroRep(id)
    }

    listarUsuariosPorEstado(id) {

        return repositorio.listarUsuariosPorEstadoRep(id)
    }

    buscarPorEmail(email) {

        return repositorio.buscarPorEmailRep(email)
    }

}

module.exports = new Cadastrar