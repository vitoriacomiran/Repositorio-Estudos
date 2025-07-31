let one = 1
let two = 2

// == comparação de igualdade
console.log(one == two) // false
console.log(one == 1) // true

console.log(one == '1') // true, compara valor, não tipo    

// != comparação de desigualdade
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != '1') // false, compara valor, não tipo

console.log(one !== '2') // true, compara valor e tipo


// estritamente igual olha pro tipo e pro valor
console.log(one === 1) // true
console.log(one === '1') // false, tipo diferente
// nesse caso o valor 1 é uma string, não um número
console.log(one === 2) // false, valores diferentes

// para ser igual tem que ser o mesmo tipo e o mesmo valor


