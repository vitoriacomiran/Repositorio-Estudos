// o método filter() cria um novo array com todos os elementos que passaram na condição


// filtrando palavras que tenham mais de 3 letras
const words = ["JavaScript", "HTML", "CSS"]

const result = words.filter((word) => word.length > 3)

console.log(result) // retorna CSS

// exemplo de filtro de produtos na promoção
const products = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false },
    { description: "Monitor", price: 900, promotion: true }
]

const promotion = products.filter((product) => product.promotion === true)

console.log(promotion)

// vai retornar Teclado e monitor

// exemplo de filtro de produto menor que $ 100
const infos = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false },
    { description: "Monitor", price: 900, promotion: true }
]

const value = infos.filter((info) => info.value < 100)

console.log(value)

// retorna mouse