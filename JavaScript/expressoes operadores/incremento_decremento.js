let number = 10

number++ // pós-incremento
console.log(number) // 11

number-- // pós-decremento
console.log(number) // 10

number += 5 // incremento com atribuição
console.log(number) // 15
number -= 3 // decremento com atribuição
console.log(number) // 12

console.log(++number) // pré-incremento, imprime 13
console.log(--number) // pré-decremento, imprime 12

console.log("pré-incremento: ", ++number) // pré-incremento: 13
console.log("pós-decremento: ", number--) // pós-decremento: 13
