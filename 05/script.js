/*
    Capture 10 itens para compor a lista de um supermercado

    Após capturar os 10 itens, imprima-os, separando por vírgula.
*/
let itens = []

for(let item = 0; item < 10; item++) {
    const listItemMarket = prompt(`Digite o produto numero número ${item + 1} : `)

    itens[item] = listItemMarket
}

alert(itens)

