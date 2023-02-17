/***********************************************************************
* Objetivo: Atividade de aprendizagem 01 - Sistema de gerenciamento de médias escolares.
* Autor: Julia Soares de Almeida.
* Data: 10/02/23
* Versão: 1.0
***********************************************************************/

const console = function 
// (nomeA, nomeP, sexoA, sexoP, nomeDisciplina, nomeCurso, n1, n2, n3, n4, resMedia, statusAprovacao)
(nomeAluno, nomeProfessor, sexoDoAluno, sexoDoProfessor, disciplina, curso, nota1, nota2, nota3, nota4, mediaAluno, statusAprovacao)
 {

    let nomeA = nomeAluno;
    let nomeP = nomeProfessor;
    let sexoAluno = sexoDoAluno;
    let sexoProfessor = sexoDoProfessor;
    let nomeDisciplina = disciplina;
    let nomeCurso = curso;
    let n1 = nota1;
    let n2 = nota2;
    let n3 = nota3;
    let n4 = nota4;
    let resultado = mediaAluno;
    let status = statusAprovacao;
    let media;

    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

    
    if (media < 50) {
        status = 'REPROVADO'
        // console.log(sexoAluno + nomeA + 'foi' + status + 'na disciplina' + nomeDisciplina +
        // '\n Curso:' + nomeCurso + sexoProfessor + nomeP + '\n Notas do aluno:' + n1 + n2 + n3 + n4 + resultado +
        // '\n Média Final:' + media + '\n Média final do Exame:' + mediaExame);
    } else if (media >= 70) {
        status = 'APROVADO'
        // console.log(sexoAluno + nomeA + 'foi' + status + 'na disciplina' + nomeDisciplina +
        // '\n Curso:' + nomeCurso + sexoProfessor + nomeP + '\n Notas do aluno:' + n1 + n2 + n3 + n4 + resultado +
        // '\n Média Final:' + media + '\n Média final do Exame:' + mediaExame);
    }

    console.log(sexoAluno + nomeA + 'foi' + status + 'na disciplina' + nomeDisciplina +
    '\n Curso:' + nomeCurso + sexoProfessor + nomeP + '\n Notas do aluno:' + n1 + n2 + n3 + n4 + resultado +
    '\n Média Final:' + media);

}

module.exports = {
    console
}
