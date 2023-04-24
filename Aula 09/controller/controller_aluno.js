/******************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de alunos.
 * Data: 14/04/2023
 * Autor: Julia
 * Versão: 1.0
 *******************************************************************************/

//Insere um novo aluno
const inserirAluno = function(dadosAluno) {

}

//Atualzar um aluno existente
const atualizarAluno = function(dadosAluno) {

}

//Exclui um aluno
const deletarAluno = function(id) {

}

//Retorna a lista de todos os alunos
const getAlunos = async function() {
    let dadosAlunosJson = {};

    //Import do arquivo DAO para acessar dados do aluno no banco.
    let alunoDAO = require('../model/DAO/alunoDAO.js');

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

    let alunoDAO = require('../model/DAO/alunoDAO.js')
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

    let alunoDAO = require('../model/DAO/alunoDAO.js')
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
    getBuscarAlunoNome
}