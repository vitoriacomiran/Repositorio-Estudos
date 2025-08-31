const data = ["Vitoria", "vitoria@email.com"]

// desestruturando um array
const [usarname, email] = data

console.log(email)

// retorna: vitoria@email.com

const fruits = ["Maçã", "Banana", "Laranja"]

const [, , laranja] = fruits

console.log(laranja)

// vai pular o primeiro e segundo e retornar o terceiro elemento