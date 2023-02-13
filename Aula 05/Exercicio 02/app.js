/***********************************************************************
* Objetivo: Sistema para gerenciar o cálculo de uma tabuada.
* Autor: Julia Soares de Almeida.
* Data: 13/02/23
* Versão: 1.0
***********************************************************************/

var tabuada = require('./modulo/tabuada.js')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o multiplicando da primeira tabuada: ', function (tabuada1) {
    let multiplicando1 = Number(String(tabuada1.replace(',', '.')));

    entradaDados.question('Digite o multiplicando da segunda tabuada: ', function (tabuada2) {
        let multiplicando2 = Number(String(tabuada2.replace(',', '.')));

        entradaDados.question('Digite o mínimo multiplicador: ', function (minMulti) {
            let minMultiplicador = Number(String(minMulti.replace(',', '.')));

            entradaDados.question('Digite o máximo multiplicador: ', function (maxMulti) {
                let maxMultiplicador = Number(String(maxMulti.replace(',', '.')));
                let resultado;

                if (tabuada1 == '' || tabuada2 == '' || minMulti == '' || maxMulti == '') {
                    console.log('ERRO: Não é possível calcular se algum dado estiver vazio.');
                } else if (isNaN(tabuada1) || isNaN(tabuada2) || isNaN(minMulti) || isNaN(maxMulti)) {
                    console.log('ERRO: Não é possível calcular se o valor digitado não for um número.');
                } else {
                    resultado = tabuada.calcularTabuada(tabuada1, tabuada2, maxMulti, minMulti);
                    if (resultado === false)
                        entradaDados.close();
                    else
                        console.log(resultado);
                    entradaDados.close();
                }
            });
        });
    });
});

