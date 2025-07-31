/*
Parâmetro: variável (escopo da função) que irá receber um valor em uma função.

Argumento: é o valor que é passado para a função.

*/

function message(username) {  // username é o parâmetro
    console.log("Olá", username)
}


message("Vitória")

// a função retorna olá vitória

// podemos fazer diferente

let newName = "Vitória"

function message (){
    console.log("Olá", newName)
}

message() // retorna o que adicionei na variável name dentro da função message


/*
Sempre pergunte:

De onde vem a informação que estou usando? Ela está dentro da função (parâmetro) ou fora da função (variável global)?

*/

// passando parâmetro
function sum(a, b){
    console.log(a + b)
}

// passandor argumento
sum(3,6)
sum(8,44)