/***********************************************************************
* Objetivo: Atividade de aprendizagem 01 - Sistema de gerenciamento de médias escolares.
* Autor: Julia Soares de Almeida.
* Data: 10/02/23
* Versão: 1.0
***********************************************************************/

var media = require('./modulo/media.js');
var exame = require('./modulo/exame.js');
var console = require('./modulo/console.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Nome do(a) Aluno(a): ', function (aluno) {
    let nomeAluno = aluno;

    entradaDados.question('Nome do(a) Professor(a): ', function (professor) {
        let nomeProfessor = professor;

        entradaDados.question('Escolha o sexo do(a) Aluno(a): FEMININO || MASCULINO \n', function (sexoA) {
            let sexoAluno = sexoA.toUpperCase;

            // if(sexoA == FEMININO){
            //     sexoAluno = 'Aluna'
            // } else{
            //     sexoAluno = 'Aluno'
            // }

            entradaDados.question('Escolha o sexo do(a) Professor(a): FEMININO || MASCULINO \n', function (sexoP) {
                let sexoProfessor = sexoP.toUpperCase;

                // if(sexoP == FEMININO){
                //     sexoProfessor = 'Aluna'
                // } else{
                //     sexoProfessor = 'Aluno'
                // }

                entradaDados.question('Nome do curso: ', function (cursoNome) {
                    let curso = cursoNome;

                    entradaDados.question('Nome da disciplina: ', function (disciplinaNome) {
                        let disciplina = disciplinaNome;

                        entradaDados.question('Digite a primeira nota: ', function (valor1) {
                            let nota1 = valor1;

                            entradaDados.question('Digite a segunda nota: ', function (valor2) {
                                let nota2 = valor2;

                                entradaDados.question('Digite a terceira nota: ', function (valor3) {
                                    let nota3 = valor3;

                                    entradaDados.question('Digite a quarta nota: ', function (valor4) {
                                        let nota4 = valor4;
                                        mediaAluno = media.calcularMedia(nota1, nota2, nota3, nota4);
                                        let resultado;

                                        if (nomeAluno == '' || nomeProfessor == '' || sexoAluno == '' || sexoProfessor == '' || curso == '' || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '')
                                            console.log('ERRO: Não é possível calcular se algum dado estiver vazio!');
                                        else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
                                            console.log('ERRO: Não é possível calcular a média se os dados digitados não forem números');
                                        else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100)
                                            console.log('ERRO: As notas devem estar entre 0 e 100.');
                                        else {

                                            if(mediaAluno >= 70){
                                                resultado = 'Aprovado';
                                                console.log(resultado);
                                            } 
                                            else if(mediaAluno <= 50){
                                                resultado = 'Reprovado';
                                                console.log(resultado);
                                            } else {
                                                entradaDados.question('Digite a nota do exame do Aluno(a): ', function (resultadoExame) {
                                                    resultadoExame = resultado;

                                                    if (exame == false){
                                                        resultado = 'Reprovado'
                                                        console.log(resultado);
                                                    
                                                    }else{
                                                        resultado = 'Aprovado'
                                                        console.log(resultado);
                                                    }
                                                });
                                            }
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
