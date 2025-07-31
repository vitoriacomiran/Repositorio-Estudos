// qual operação vai ser executada primeiro
// ordem de precedência dos operadores

let a = 10;
let b = 5;
let c = 20;
let d = 2;
let e = 3;
let f = 4;
let resultado;
resultado = a + b * c; // 10 + 5 * 20 = 10 + 100 = 110
console.log(resultado); // 110

resultado = (a + b) * c; // (10 + 5) * 20 = 15 * 20 = 300
console.log(resultado); // 300

// multiplicação e divisão têm precedência sobre adição e subtração
resultado = a + b / d; // 10 + 5 / 2 = 10 + 2.5 = 12.5
console.log(resultado); // 12.5
