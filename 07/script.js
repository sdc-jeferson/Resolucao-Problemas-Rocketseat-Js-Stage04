/*
    Faça um programa que tenha um menu e apresente as seguintes mensagens :

    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do Programa

    -----------

    O Pograma deve capturar o número digitado pelo usuário e mostrar os seguintes cenários :

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existe nenhum item cadastrado"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.
    "Sessao encerrada!"

*/

/*
 SISTEMA DE CADASTRO
 Váriaveis:
    options    
    lista
*/

let options;
let lista = [];


while(options != 3){

    options = prompt (`Olá usuário! Digite o número da opção desejada :

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do Programa`)

    options = Number(options)

    switch(options){
        case 1:
        let addListItem = prompt("qual produto deseja cadastrar ?")
        lista.push(addListItem)
        console.log(lista)
        break;

        case 2:
            if(lista.length == 0){
                alert("Não existe nenhum item cadastrado")
            }else{
                alert(lista)
            }
            break;

        case 3:
            alert("Bye")
            break;

        default:
            alert("Opção inválida, tente novamente!")
            break;          
    }

}

