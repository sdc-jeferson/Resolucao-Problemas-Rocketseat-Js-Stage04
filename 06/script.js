/*
    ** Jogo da adivinhação **

    Apresente a mensagem ao usuário:
    "Adivinhe o número que estou pensando ? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto um usuário não adivinhar o número, mostrar a imagem:
    "Erro, tente novamente:"

    Caso usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem pelo úmero de tentativas

*/

let riceiveNumber = prompt("Adivinhe o número que estou pensando ? Está entre 0 e 10")

riceiveNumber = Number(riceiveNumber)

const numberAleatory = Math.round(Math.random() * 10)
// Arredonda para o mais próximo possivel de 0 até 10, por isso o * 10.

const match = riceiveNumber == numberAleatory
//Type conversion para tirar o recebimento do numero em String, pois nunca iria da certo para avariavel *match, sempre retornaria false devido ser uma String.

//Conta o total de tentativas do usuário
let xAttempts = 1; // Minimo de 1 acerto do usuario

while (riceiveNumber != numberAleatory){
    riceiveNumber = prompt("Erro, tente novamente : ")
    xAttempts++
}

//Desafio : Verificar se somente o acerto foi em 1 tentativa
if(xAttempts == 1){
    alert(`Parabéns! O número gerado randomicamente foi ${numberAleatory} e você adivinhou o número em 1 tentativa`)
}else{
    alert(`Parabéns! O número gerado randomicamente foi ${numberAleatory} e você adivinhou o número em ${xAttempts} tentativa(s)`)
}







