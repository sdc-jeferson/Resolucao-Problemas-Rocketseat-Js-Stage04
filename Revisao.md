# O que aprendemos

### Sintexe e boas práticas
```js   
// ponto e virgula facultativos
const myConst = 'Constante';

// escrever com calcCase
const myConst = "constante2"

//procurar escrever códigos em inglês
//para treinar, aumentar as opoturnidades futuras
function doSomething(myArgument){}
```

### Variáveis
```js
const
let
var
```

### Tipo de dados
```js
String ""
Number 123
Boolean true false
undefined // Existe mas não está dfinido
null // Não existe
```

### Estrutura de dados
```js

//Array
const myArray = [1, 2, 3, "a", "b", true]

//Object
const myObject = { property : "value" :}
```

### Funções

```js
// 1. Criação e tipos de funções
// named
function myFunction() {}

// Anonymous
const myfunction = function(){}

// Arrow Function, geralmente usada em constantes.
// Mesma ideia de função anônima.
const myFunction = () => {}

// Arguments & Return
function sum(a,b){
    return a + b;
}

// A Arrow function, se houver somente uma linha de código, não precisa colocar chaves e nem return.
const sum = (a,b) => a + b;

//2. Execução
myfunction()
sum(1,2)
// const variable = sum(1,2)

```

### Fluxo da aplicação
```js
// if, else if, else
const isRainning = true;
if (isRainning){
    alert("Está chovendo, pegar guarda chuvas")
}else{
    alert("Dia Limpo")
}

//switch
const water = "com gás"
switch (water){
    case "com gás":
        alert("Essa agua é com gás");
        break;
    case "sem gás":
        alert("Essa agua é sem gás");
        break;
    case "da fonte":
        alert("Essa agua é da fonte");
        break;
    default:
        alert("Onde está minha água ?");
        break;
}       
```

### Estrutura de Repetição
```js
//while
let play = true;
while(play != true){
    // preciso criar uma logica para que ele seja falso para não entrar em loop eterno.
    // fazer algo até o play ser falso
    // criar uma lógica para o play se tornar falso
}

//for (tradicional)

let text = "abc";

for (let i = 0; i < text.length; i++) {
    alert(text[i])
}

//deceremento
for (let i = 10; i > 1; i--) {
    alert(text[i])
}

const alphabet = ["a", "b", "c"]

// for...of
for (let showAlphabet of alphabet) {
    alert(showAlphabet)
}
```

### Operadores Matemáticos

# Próximos Passos
```js
() // Group operator - agrupamento

// matemáticos
* // multiplicação
**// exponenciação
/ // divisão
% // resto da divisão
+ // Soma
- // Substração

//lógicos
&& // E logico
|| // Ou lógico
! // Não lógico

// compração - relacional
> // Maior que 
< // menor que
>= // Maior igual que
<= // menor igual que
!= // diferente de

// O utros operadores/expressões
++ // Incremento
-- // Decremento
{} // Objeto vazio ou bloco de código
[] // Array vazio
, // Separa elementos de um array, objeto ou criação de multi variáveis;
```