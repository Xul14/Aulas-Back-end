/***********************************************************************
* Objetivo: Arquivo de funções para cálculo matemático
* Autor: Julia Soares de Almeida
* Data: 03/02/23
* Versão: 1.0
***********************************************************************/

//Função para realizar cálculos matemáticos(Soamr, dividir, subtrair e multiplicar)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR')
        resultado = valor1 + valor2;
    else if (operacao == 'SUBTRAIR')
        resultado = valor1 - valor2;
    else if (operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2;
    else if (operacao == 'DIVIDIR') {
        if (valor2 == 0)
            console.log('ERRO: Não é possível realizar a divisão por 0!');
        else;
        resultado = valor1 / valor2;
    } else {
        console.log('ERRO: Sua escolha de operação matemática foi inválida!');
        //Finaliza o callback (Sai do programa)
        entradaDados.close();
    }

    // validação para quando a variável não for processada por algum problema.
    if (resultado == undefined)
        return false;
    else
        return resultado;

}

// Permite adicionar uma function no escopo global
// As function que não estiverem aqui no exports, serão tratadas como escopo local(private).
module.exports = {
    calculadora
}