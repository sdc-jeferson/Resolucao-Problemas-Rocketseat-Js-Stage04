/*
    Capturar 2 número e fazer as operações matamáticas de soma, subtração, multiplicação, divisão e resto da divisão.

    E para cada operação, mostrar um alerta com o resultado

*/

alert("Iremos fazer os calculos para soma, subtração, multiplicação, divisão e resto da divisão")

let numberOne = prompt("Insert the first number : ")
let numberTwo = prompt("Insert the second number : ")

numberOne = Number(numberOne) // Ja convertendo para números.
numberTwo = Number(numberTwo)

const resultSoma = numberOne + numberTwo
const resultSubtracao = numberOne - numberTwo
const resultMultipicacao = numberOne * numberTwo
const resultDivisao = numberOne / numberTwo
const resultRestoDivisao = numberOne % numberTwo


alert(`A soma entre os dois números : ${resultSoma}`) 

alert(`A subtracao entre os dois números : ${resultSubtracao}`)

alert(`A multiplicação entre os dois números : ${resultMultipicacao}`) 

alert(`A divisão entre os dois números : ${resultDivisao}`) 

alert(`O resto da divisão entre os dois números : ${resultRestoDivisao}`) 