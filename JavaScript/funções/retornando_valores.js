function sum(a, b){
    let result = a + b
    
    return result // quando usa o return ele devolve o resultado para quem chamou a função
}

let response = sum(3,7) // aqui sum é a chamada da função
console.log(response)


/*
a e b são parâmetros: valores que você envia para dentro da função
result = a + b: faz a soma.
return result: entrega o valor de volta para quem chamou a função.

A função é executada com a = 3 e b = 7.
Ela calcula result = 3 + 7 → 10.
O return devolve esse 10.

Esse 10 é armazenado na variável response



esse exemplo é para quando quer usar o resultado de um função fora dela

Quando usar console.log() dentro da função, você mostra o resultado no console, mas não consegue usar esse resultado depois.
Quando usa return, você entrega o valor para quem chamou a função, e aí pode:

salvar em uma variável,

usar em outra função,

somar de novo,

fazer uma comparação...
*/