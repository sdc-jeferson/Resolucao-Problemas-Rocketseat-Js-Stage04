/*
    Solictar o nome do aluno e as 3 notas do bimestre e calcular a média daquel aluno.

    A média positiva é maior que 6

    Se o aluno passou no bismestre, da os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

    Em ambos os casos, mostre mensagem com o nome do launo e a nota

*/


alert("Calcula média aluno");

let nameStudent = prompt("Qual o nome do(a) aluno(a) : ");

let notaOne = prompt("Insira a primeira nota : ");
let notaTwo = prompt("Insira a segunda nota : ");
let notaThree = prompt("Insira a terceira nota : ");


 notaOne = Number(notaOne);
 notaTwo = Number(notaTwo);
 notaThree = Number(notaThree);

 const calcMediaStudent = (notaOne + notaTwo + notaThree) / 3;

 calcMediaStudent.toFixed(2);
 // Funçao toFixed(1,2,3 etc) --> Verifca quantidade de casas decimais.


 if(calcMediaStudent > 6){
    alert(` Parabéns ${nameStudent}!! Sua nota foi de : ${calcMediaStudent}, está aprovado!!`)

 }else if(calcMediaStudent >=4 && calcMediaStudent < 6){
    alert(`${nameStudent}, sua nota foi de : ${calcMediaStudent}, precisa dar seu melhor na prova de recuperação.`)
 }else{
    alert(`${nameStudent}, sua nota foi de : ${calcMediaStudent}, está reprovado, até a próxima!`)
 }




