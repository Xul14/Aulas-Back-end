/***********************************************************************
* Objetivo: Atividade de aprendizagem 01 - Sistema de gerenciamento de médias escolares.
* Autor: Julia Soares de Almeida.
* Data: 10/02/23
* Versão: 1.0
***********************************************************************/

var media = require('./modulo/media.js');
var exame = require('./modulo/exame.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Nome do(a) Aluno(a): ', function (aluno) {
    let nomeAluno = aluno;

    entradaDados.question('Nome do(a) Professor(a): ', function (professor) {
        let nomeProfessor = professor;

        entradaDados.question('Escolha o sexo do(a) Aluno(a): 1 - FEMININO || 2 - MASCULINO \n', function (sexoA) {
            let sexoAluno = Number(sexoA);

            entradaDados.question('Escolha o sexo do(a) Professor(a): 1 - FEMININO || 2 - MASCULINO \n', function (sexoP) {
                let sexoProfessor = Number(sexoP);

                entradaDados.question('Nome do curso: ', function (cursoNome) {
                    let curso = cursoNome;

                    entradaDados.question('Nome da disciplina: ', function (disciplinaNome) {
                        let disciplina = disciplinaNome;

                        entradaDados.question('Digite a primeira nota: ', function (valor1) {
                            let nota1 = valor1.replace(',', '.');

                            entradaDados.question('Digite a segunda nota: ', function (valor2) {
                                let nota2 = valor2.replace(',', '.');

                                entradaDados.question('Digite a terceira nota: ', function (valor3) {
                                    let nota3 = valor3.replace(',', '.');

                                    entradaDados.question('Digite a quarta nota: ', function (valor4) {
                                        let nota4 = valor4.replace(',', '.');

                                        if (nomeAluno == '' || nomeProfessor == '' || sexoAluno == '' || sexoProfessor == '' || curso == '' || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '')

                                            console.log('ERRO: Não é possível calcular se algum dado estiver vazio!');

                                        else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))

                                            console.log('ERRO: Não é possível calcular a média se os dados digitados não forem números');

                                        else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100)

                                            console.log('ERRO: As notas devem estar entre 0 e 100.');

                                        else if (sexoProfessor < 1 || sexoProfessor > 2 || sexoAluno < 1 || sexoAluno > 2)

                                            console.log('ERRO: Escolher entre 1 ou 2');

                                        else if (isNaN(sexoProfessor) || isNaN(sexoAluno))

                                            console.log('ERRO: Entradas vazias! Escolher entre 1 ou 2')

                                        else {

                                            let sexoDoAluno;
                                            let sexoDoProfessor;
                                            let statusAprovacao;
                                            mediaAluno = media.calcularMedia(nota1, nota2, nota3, nota4);

                                            if (sexoAluno == 1) {
                                                sexoDoAluno = 'A Aluna'
                                            } else {
                                                sexoDoAluno = 'O Aluno'
                                            }

                                            if (sexoProfessor == 1) {
                                                sexoDoProfessor = 'Professora'
                                            } else {
                                                sexoDoProfessor = 'Professor'
                                            }

                                            if (mediaAluno >= 70) {
                                                statusAprovacao = 'aprovado'
                                                console.log('\n ' + sexoDoAluno + ' ' + nomeAluno + ' foi ' + statusAprovacao + ' na disciplina de ' + disciplina +
                                                    '\n Curso: ' + curso +
                                                    '\n ' + sexoDoProfessor + ': ' + nomeProfessor +
                                                    '\n Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 +
                                                    '\n Média Final: ' + mediaAluno)

                                            } else if (mediaAluno >= 50 && mediaAluno <= 69) {

                                                console.log('Aviso: O aluno precisa fazer o exame');
                                                entradaDados.question('Nota do exame: ', function (resultadoExame) {
                                                    notaExam = resultadoExame.replace(',', '.');

                                                    let resExam = exame.getExame(mediaAluno, notaExam);

                                                    if (resExam >= 70) {
                                                        statusAprovacao = 'aprovado';
                                                    }
                                                    else if (resExam <= 50) {
                                                        statusAprovacao = 'reprovado';
                                                    }

                                                    console.log('\n ' + sexoDoAluno + ' ' + nomeAluno + ' foi ' + statusAprovacao + ' na disciplina de ' + disciplina +
                                                '\n Curso: ' + curso +
                                                '\n ' + sexoDoProfessor + ': ' + nomeProfessor +
                                                '\n Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 +
                                                '\n Média Final: ' + mediaAluno + '\n Média final do Exame:' + resExam)
                                                });


                                            }else if (mediaAluno <= 49) {

                                                statusAprovacao = 'reprovado'
                                                
                                                console.log('\n ' + sexoDoAluno + ' ' + nomeAluno + ' foi ' + statusAprovacao + ' na disciplina de ' + disciplina +
                                                    '\n Curso: ' + curso +
                                                    '\n ' + sexoDoProfessor + ': ' + nomeProfessor +
                                                    '\n Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 +
                                                    '\n Média Final: ' + mediaAluno)

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
