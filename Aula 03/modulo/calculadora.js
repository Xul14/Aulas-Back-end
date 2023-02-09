/***********************************************************************
* Objetivo: Arquivo de funções para cálculo matemático.
* Autor: Julia Soares de Almeida.
* Data: 03/02/23
* Versão: 1.0
***********************************************************************/

//Função para realizar cálculos matemáticos(Somar, dividir, subtrair e multiplicar).
//Forma 01 de criar uma função.
// function calculadora(numero1, numero2, tipoCalculo) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toUpperCase();
//     let resultado;
//     let status = true;

//     // if (operacao == 'SOMAR')
//     //     resultado = valor1 + valor2;
//     // else if (operacao == 'SUBTRAIR')
//     //     resultado = valor1 - valor2;
//     // else if (operacao == 'MULTIPLICAR')
//     //     resultado = valor1 * valor2;
//     // else if (operacao == 'DIVIDIR') {
//     //     if (valor2 == 0){
//     //         console.log('ERRO: Não é possível realizar a divisão por 0!');
//     //         status = false;
//     //      }else;
//     //     resultado = valor1 / valor2;
//     // } else {
//     //     console.log('ERRO: Sua escolha de operação matemática foi inválida!');
//     //     status = false;
//     // }

//     switch (operacao) {
//         case 'SOMAR':
//             resultado = valor1 + valor2;
//             break;
//         case 'SUBTRAIR':
//             resultado = valor1 - valor2;
//             break;
//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2;
//             break;
//         case 'DIVIDIR':
//             if (valor2 == 0) {
//                 console.log('ERRO: Não é possível realizar a divisão por 0!');
//                 status = false;
//             } else;
//             resultado = valor1 / valor2;

//             break;
//         default:
//             console.log('ERRO: Sua escolha de operação matemática foi inválida!');
//             status = false;
//     }


//     // Validação para quando a variável não for processada por algum problema.
//     if (resultado == undefined && status == false)
//         return false;
//     else
//         return resultado;

// }



//Forma 02 de se criar uma função (é uma das mais utilizadas).
const calculadora = function(numero1, numero2, tipoCalculo){
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    // if (operacao == 'SOMAR')
    //     resultado = valor1 + valor2;
    // else if (operacao == 'SUBTRAIR')
    //     resultado = valor1 - valor2;
    // else if (operacao == 'MULTIPLICAR')
    //     resultado = valor1 * valor2;
    // else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0){
    //         console.log('ERRO: Não é possível realizar a divisão por 0!');
    //         status = false;
    //      }else;
    //     resultado = valor1 / valor2;
    // } else {
    //     console.log('ERRO: Sua escolha de operação matemática foi inválida!');
    //     status = false;
    // }

    switch (operacao) {
        case 'SOMAR':
            resultado = SOMAR(valor1, valor2)
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1, valor2);
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1, valor2);
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar a divisão por 0!');
                status = false;
            } else;
            resultado = DIVIDIR(valor1, valor2);

            break;
        default:
            console.log('ERRO: Sua escolha de operação matemática foi inválida!');
            status = false;
    }


    // Validação para quando a variável não for processada por algum problema.
    if (resultado == undefined && status == false)
        return false;
    else
        return resultado;

}

//Forma 03 de criar uma função (Modelo Arrow)
const SOMAR = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR = (valor1, valor2) => valor1 * valor2;
const DIVIDIR = (valor1, valor2) => valor1 / valor2;

// Permite adicionar uma function no escopo global.
// As function que não estiverem aqui no exports, serão tratadas como escopo local(private).
module.exports = {
    calculadora
}
