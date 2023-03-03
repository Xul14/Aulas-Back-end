/***********************************************************************
* Objetivo: Exercício com Array e Json
* Autor: Julia Soares de Almeida.
* Data: 03/03/23
* Versão: 1.0
***********************************************************************/

var estadosCidades = require('./estados_cidades.js');

// var readline = require('readline');

// var entradaDados = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


const getListaDeEstados = function(listaEstados) {
let jsonEstados = {}
let arrayEstados = []
let quantidadeEstados = 0
let status = true

 listaEstados.estados.forEach(function(estados){
    arrayEstados.push(estados.sigla)
    status = true
})

if(status){
    jsonEstados.uf.arrayEstados
    quantidadeEstados = ('quantidade: ' + jsonEstados.uf.arrayEstados.length)
}else{
    status = false
}  

    return listaEstados
}

const getDadosEstado = function(){

}

getListaDeEstados(estadosCidades.estadosCidades)




















