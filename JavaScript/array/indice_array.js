let fruits = ["Apple", "Lemon", "Watermelon"]

let positions = fruits.indexOf("Watermelon")

console.log(positions)

// retorna indice 2

fruits.splice(1, 2) // (start, posição de quantos após o start devem ser apagados)
console.log(fruits)

// retorna Apple

// do indice 1 ao 2 foi removido