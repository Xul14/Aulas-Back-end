/***********************************************************************
* Objetivo: Exercício com Array e Json
* Autor: Julia Soares de Almeida.
* Data: 03/03/23
* Versão: 1.0
***********************************************************************/

var estadosCidades = require('./estados_cidades.js');

const getListaDeEstados = function (listaEstados) {
    let jsonEstados = {}
    let arrayEstados = []
    let status = false

    listaEstados.estados.forEach(estados => {
        arrayEstados.push(estados.sigla)
        status = true
    });


    if (status == true) {
        jsonEstados.uf = arrayEstados
        jsonEstados.quantidade = arrayEstados.length
        return jsonEstados
    } else {
        return false
    }
}

console.log(getListaDeEstados(estadosCidades.estadosCidades))