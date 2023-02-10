/***********************************************************************
* Objetivo: Repetições.
* Autor: Julia Soares de Almeida.
* Data: 09/02/23
* Versão: 1.0
***********************************************************************/

var tabuada = require('./modulo/tabuada.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o multiplicando: ', function (multiplicando) {
    let valorMult = Number(String(multiplicando.replace(',', '.')));


    entradaDados.question('Digite o valor máximo do multiplicador: ', function (maxMultiplicador) {
        let valorMax =  Number(String(maxMultiplicador.replace(',', '.')));
        let resultado;

        if(multiplicando == '' || maxMultiplicador == '')
            console.log('ERRO: Não é possível calcular se algum dado estiver vazio.');
        else if(isNaN(multiplicando) || isNaN(maxMultiplicador))
            console.log('ERRO: Digite apenas números.');
        else{
            resultado = tabuada.calcularTabuada(multiplicando, maxMultiplicador);
            if(resultado === false)
                entradaDados.close();
            else
                console.log(resultado);
                entradaDados.close();
        }

    });

});