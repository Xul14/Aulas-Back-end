/***********************************************************************
* Objetivo: Sistema para gerenciar o cálculo de uma tabuada.
* Autor: Julia Soares de Almeida.
* Data: 13/02/23
* Versão: 1.0
***********************************************************************/

const calcularTabuada = function (tabuada1, tabuada2, maxMulti, minMulti) {
    let multiplicando1 = Number(String(tabuada1).replace(',', '.'));
    let multiplicando2 = Number(String(tabuada2).replace(',', '.'));
    let maxMultiplicador = Number(String(maxMulti).replace(',', '.'));
    let minMultiplicador = Number(String(minMulti).replace(',', '.'));
    let resultado;


    if (isNaN(multiplicando1) || isNaN(multiplicando2) || isNaN(maxMultiplicador) || isNaN(minMultiplicador)) {
        console.log('ERRO: Digitar apenas números!');
    } else if (minMultiplicador > maxMultiplicador) {
        console.log('ERRO: O mínimo multiplicador deve ser menor que o máximo multiplicador!');
    } else if (multiplicando1 == '' || multiplicando2 == '' || maxMultiplicador == '' || minMultiplicador == '') {
        console.log('ERRO: Entradas vazias!');
    } else if(multiplicando1 == 0 || multiplicando2 == 0 || maxMultiplicador == 0 || minMultiplicador == 0){
        console.log('ERRO: O valor digitado não pode ser 0!');
    }else if (multiplicando1 < 2 || multiplicando1 > 50 || multiplicando2 < 2 || multiplicando2 > 50) {
        console.log('ERRO: O multiplicando deve estar entre 2 e 100!');
    } else if (minMultiplicador < 1 || minMultiplicador > 50 || maxMultiplicador < 1 || maxMultiplicador > 50) {
        console.log('ERRO:O multiplicador deve estar entre 1 e 50!');
    } else {

        let menorMultiplicando = minMultiplicador;

        while (multiplicando1 <= multiplicando2) {

            minMultiplicador = menorMultiplicando;

            console.log(`Tabuada do [${multiplicando1}]`)

            while (minMultiplicador <= maxMultiplicador) {
                resultado = multiplicando1 * minMultiplicador;
                console.log(multiplicando1 + ' X ' + minMultiplicador + ' = ' + resultado);
                minMultiplicador++;
            }
            multiplicando1++;
        }

    }

}
// console.log(calcularTabuada(7, 9, 5, 2))


module.exports = {
    calcularTabuada
}