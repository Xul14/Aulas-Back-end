/******************************************************************************
 * Objetivo: Responsável pela manipulação dos alunos no banco de dados.
 * Data: 14/04/2023
 * Autor: Julia
 * Versão: 1.0
 *******************************************************************************/

//Inserir dados do aluno no banco de dados
const insertAluno = function(dadosAluno) {

}

//Atualizar dados do aluno no banco de dados
const updateAluno = function(dadosAluno) {

}

//Deletar dados do aluno no banco de dados
const deleteAluno = function(id) {

}

//Retornar dados do aluno 
const selectAllAlunos = async function() {

    //Import da biblioteca do prisma client
    let { PrismaClient } = require('@prisma/client');

    //Instância da classe PrismaClient 
    let prisma = new PrismaClient();

    //Sript SQL para buscar todos o utens no banco
    let sql = 'select * from tbl_aluno';

    //$queryRawUnsafe(sql) -> Permite interpretar uma variável como sendo um scriptSQL
    // $queryRaw('select * from tbl_aluno') -> Permite interpretar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //Valida se o banco retornou algum registro
    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;

}

//Retornar dados do aluno filtrando pelo id
const selectByIdAlunos = async function(id) {
    let { PrismaClient } = require('@prisma/client')

    let prisma = new PrismaClient()

    let sql = `select * from tbl_aluno where id = ${id}`

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;

}

//Retornar dados do aluno filtrando pelo nome
const selectByNameAlunos = async function(name) {
    let { PrismaClient } = require('@prisma/client')

    let prisma = new PrismaClient()

    let sql = `select * from tbl_aluno where nome like '%${name}%'`

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;

}

module.exports = {
    selectAllAlunos,
    selectByIdAlunos,
    selectByNameAlunos
}