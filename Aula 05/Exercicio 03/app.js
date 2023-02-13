/***********************************************************************
* Objetivo: Sistema que gerencia números pares e impares
* Autor: Julia Soares de Almeida.
* Data: 13/02/23
* Versão: 1.0
***********************************************************************/
var separador = require('./modulo/separador.js')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número inicial: ', function (numInicial) {
    let numeroInicial = Number(String(numInicial.replace(',', '.')));

    entradaDados.question('Número inicial: ', function (numFinal) {
        let numeroFinal = Number(String(numFinal.replace(',', '.')));
        let resultado;

        if(numeroInicial == '' || numeroFinal == ''){
            console.log('ERRO: Entradas vazias!');
        }else if(isNaN(numeroInicial) || isNaN(numeroFinal)){
            console.log('ERRO: O valor digitado deve ser um número!');
        }else{
            resultado = separador.separador(numInicial, numFinal);
            if (resultado === false)
                entradaDados.close();
            else
                console.log(resultado);
            entradaDados.close();
        }
        
    });
});