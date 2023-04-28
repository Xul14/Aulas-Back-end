/******************************************************************************
 * Objetivo: Responsável pela manipulação dos alunos no banco de dados.
 * Data: 14/04/2023
 * Autor: Julia
 * Versão: 1.0
 *******************************************************************************/


//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client');

//Instância da classe PrismaClient 
var prisma = new PrismaClient();

//Inserir dados do aluno no banco de dados
const insertAluno = async function(dadosAluno) {

    //Script para inserir dados
    let sql = `insert into tbl_aluno(
        nome,
        rg,
        cpf,
        data_nascimento,
        email
    )values(
        '${dadosAluno.nome}',
        '${dadosAluno.rg}',
        '${dadosAluno.cpf}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'
    )`

    //Executa o script
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    //Verificação de falhas
    if (resultStatus)
        return true;
    else
        return false;

}

//Atualizar dados do aluno no banco de dados
const updateAluno = function(dadosAluno) {

}

//Deletar dados do aluno no banco de dados
const deleteAluno = function(id) {

}

//Retornar dados do aluno 
const selectAllAlunos = async function() {

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
    // let { PrismaClient } = require('@prisma/client')

    // let prisma = new PrismaClient()

    let sql = `select * from tbl_aluno where id = ${id}`

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;

}

//Retornar dados do aluno filtrando pelo nome
const selectByNameAlunos = async function(name) {
    //let { PrismaClient } = require('@prisma/client')

    // let prisma = new PrismaClient()

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
    selectByNameAlunos,
    insertAluno
}