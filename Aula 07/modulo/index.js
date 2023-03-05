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
        return status
    }
}

const getDadosEstado = function (sigla) {
    let dadosEstado
    let status = false

    estadosCidades.estadosCidades.estados.forEach(estado => {
        if (estado.sigla == sigla.toUpperCase()) {
            dadosEstado = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao
            }
        }

        status = true
    });

    if (status == true) {
        return dadosEstado
    } else {
        return status
    }

}

const getCapitalEstado = (function (sigla) {
    let getCapital
    let status = false

    estadosCidades.estadosCidades.estados.forEach(estado => {
        if (estado.sigla == sigla.toUpperCase()) {
            getCapital = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.regiao
            }
        }

        status = true

    });

    if (status == true) {
        return getCapital
    } else {
        return status
    }

})



// console.log(getListaDeEstados(estadosCidades.estadosCidades))
// console.log(getDadosEstado('SP'))
console.log(getCapitalEstado('RJ'))