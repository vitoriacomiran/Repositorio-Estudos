// retorna o índice no array do primeiro elemento que satisfazer a condição.
// caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const values = [1, 3, 5, 6]

console.log(values.findIndex((value) => value > 2))

// retorna 1, ou seja, é o indice um do array que é maior que 2

const index = values.findIndex((value) => value > 2)
console.log(values[index])

// retorna 3, o valor que é maior que 2


// exemplo de quando não encontra
console.log(values.findIndex((value) => value > 12))

// retorna -1


