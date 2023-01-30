/***********************************************************************
* Objetivo: Calcular a média de quatro notas escolares
* Autor: Julia Soares de Almeida
* Data: 27/01/23
* Versão: 1.0
***********************************************************************/

/*
  * Criação de variáveis:

    * var => Cria uma variável/espaço em memória de escopo global para o projeto, ou seja, 
    essa variável poderá ser usada em qualquer parte do arquivo (várias funções). 

    * let =>  Cria uma espaço em memória de escopo local para o projeto, ou seja, essa 
    variável somente poderá ser usada dentro da função que foi criada.

    * const =>  Cria uma espaço em memória de escopo local ou global para o projeto, ou seja, 
    essa constante poderá ser usada em qualquer parte do projeto e nunca sofrerá alteração.
    Serve para colocar um conteúdo fixo dentro do espaço em memória, algo imutável.

  * Conversão de tipos de dados
     * parseInt() ou Number.parseInt() => Converte uma string em inteiro.
     * parseFloat() ou Number.parseFloat() => Converte String em real.
     * Number => Converte uma string para número conforme a entrada do valor ele será definido como inteiro ou real.
                    
   * Operadores de comparação
     * == => Verifica igualdade entre os conteúdos
     * != => Verifica a diferença entre os conteúdos 
     * === => Verifica se tem igualdade entre conteúdos e tipo de dados
     * !== => Verifica a diferença entre conteúdos e a igualdade de tipos de dados
     * ==! => Verifica a igualdade entre conteúdos e a diferença de tipos de dados
     * < => maior
     * > => menor
     * <= => maior ou igual
     * >= => menor ou igual 
     
   * Operadores lógicos
    * E         &&  AND
    * OU        ||  OR 
    * NEGAÇÃO   !   NOT 
     
    * Ordem de execução de operadores lógicos
     * 0 ⇒ ( )
     * 1 ⇒ NOT
     * 2 ⇒ AND
     * 3 ⇒ OR 

 */


//Import da biblioteca readline
var raedline = require('readline');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = raedline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// Função de callback para entrar o nome do aluno
entradaDados.question('Digite seu nome: \n', function (nome) {
    //Recebe o Valor digitado pelo teclado
    let nomeAluno = nome;

    //Função de callack para entrar a nota 1
    entradaDados.question('Digite sua nota do primeiro bimestre: \n', function (nota1) {
        let valor1 = nota1;

        entradaDados.question('Digite sua nota do segundo bimestre: \n', function (nota2) {
            let valor2 = nota2;

            entradaDados.question('Digite sua nota do terceiro bimestre: \n', function (nota3) {
                let valor3 = nota3;

                entradaDados.question('Digite sua nota do quarto bimestre: \n', function (nota4) {
                    let valor4 = nota4;
                    let media;

                    //Tratamento de erros
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                        console.log('ERRO: Algum valor está vazio.')
                    }else if( isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                        console.log('ERRO: O valor inserido deve ser um número.')
                    }else if (valor1 < 0 || valor1 > 10 || valor2 < 0 || valor2 > 10 ||valor3 < 0 || valor3 > 10 ||valor4 < 0 || valor4 > 10){
                        console.log('ERRO: O valor das notas deve estar entre 0 e 10!');
                    }else{
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4;

                        if (parseFloat(media) < 7){
                            console.log('Status: Aluno reprovado!');
                        }else{
                            console.log('Status: Aluno aprovado!');
                        };

                        console.log('Nota primeiro bimestre: ' + valor1);
                        console.log('Nota segundo bimestre: ' + valor2);
                        console.log('Nota terceiro bimestre: ' + valor3);
                        console.log('Nota quarto bimestre: ' + valor4);
    
                        console.log('Sua média é: ' + media.toFixed(1));
                    }
                   
                });
            });
        });
    });

});