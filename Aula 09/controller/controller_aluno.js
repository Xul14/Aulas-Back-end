/******************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de alunos.
 * Data: 14/04/2023
 * Autor: Julia
 * Versão: 1.0
 *******************************************************************************/

//Iport das mensagens de erro
var message = require('./modulo/config.js')

//Import do arquivo DAO para acessar dados do aluno no banco.
var alunoDAO = require('../model/DAO/alunoDAO.js');

//Insere um novo aluno
const inserirAluno = async function(dadosAluno) {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS

    } else {
        //Envia os dados para a model inserir no banco
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //Valida se o banco inseriu corretamente os dados
        if (resultDadosAluno) {
            return message.SUCCESS_CREATED_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

//Atualzar um aluno existente
const atualizarAluno = async function(dadosAluno, idAluno) {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {

        return message.ERROR_REQUIRED_FIELDS

        //Tratativas de erro no ID
    } else if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {

        return message.ERROR_INVALID_ID //Status code 400

    } else {

        //Adiciona o id do aluno no JSON dos dados
        dadosAluno.id = idAluno

        //Encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)

        if (resultDadosAluno) {
            return message.SUCCESS_UPDATED_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

//Exclui um aluno
const deletarAluno = async function(idAluno) {

    let buscarAluno = await getBuscarAlunoId(idAluno)

    if (buscarAluno) {

        if (idAluno == "" || idAluno == undefined || isNaN(idAluno)) {

            return message.ERROR_INVALID_ID //Status code 400

        } else {

            //Encaminha os dados para a model do aluno
            let resultDadosAluno = await alunoDAO.deleteAluno(idAluno)

            if (resultDadosAluno) {
                return message.SUCCESS_DELETED_ITEM
            } else {
                return message.ERROR_INTERNAL_SERVER
            }
        }

    } else {
        return message.ERROR_ID_NOT_FOUND
    }


}

//Retorna a lista de todos os alunos
const getAlunos = async function() {
    let dadosAlunosJson = {};

    //Chama a função do arquivo DAO que irá retornar todos os registros do banco
    let dadosAluno = await alunoDAO.selectAllAlunos();

    if (dadosAluno) {
        //Criando um Json com atributo alunos para uma array de alunos
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno;
        return dadosAlunosJson
    } else {
        return false
    }

}

//Pesquisa um aluno pelo id
const getBuscarAlunoId = async function(id) {
    let alunosJsonId = {}

    let dadosAluno = await alunoDAO.selectByIdAlunos(id);

    if (dadosAluno) {
        alunosJsonId.aluno = dadosAluno;
        return alunosJsonId
    } else {
        return false
    }

}

//Pesquisa um aluno pelo nome
const getBuscarAlunoNome = async function(nome) {
    let alunosJsonNome = {}

    let dadosAluno = await alunoDAO.selectByNameAlunos(nome);

    if (dadosAluno != null && dadosAluno != undefined && isNaN(dadosAluno)) {
        alunosJsonNome.aluno = dadosAluno;
        return alunosJsonNome
    } else {
        return false
    }

}

module.exports = {
    getAlunos,
    getBuscarAlunoId,
    getBuscarAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}