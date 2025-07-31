// Generics permitem criar componentes reutilizáveis que funcionam com diferentes tipos, mantendo a segurança de tipos

// JS sem tipagem

function primeiroItem(array) {
  return array[0];
}

const numb = [1, 2, 3];
const names = ["Ana", "João"];

const primeiro = primeiroItem(numb); // sem garantia de tipo no retorno


// typescript com generics
function segundoItem<T>(array: T[]): T {
  return array [0];
}

const numeros = [1, 2, 3];
const nomes = ["Ana", "João"];

const segundoItem1 = segundoItem(numeros); // number
const segundoItem2 = segundoItem(nomes); // string

// tipo preservado


// Implemente a função ultimoItem usando generics
function ultimoItem<T>(array: T[]): T {
  return array[array.length - 1];
}

//Use <T> após o nome da função
//O parâmetro deve ser T[]
//O retorno deve ser T