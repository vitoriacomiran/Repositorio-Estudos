// retorna o valor do primeiro elemento do array que satisfazer a condição, caso contrário, undefined é retornado.


// retorna o primeiro elemento que for maior que dez
const values = [5, 12, 6, 130, 44]

const found = values.find((value) => value > 10)

console.log(found) // retorna 12

