// O método map() chama a função callback recebida por parâmetro para cada elemento do array original, em ordem
// constrói um novo array com base nos retornos de cada chamada, e no final devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor"]

// percorrer o array

products.map((item) => {
    console.log(item) // retorna ["Teclado", "Mouse", "Monitor"]
})

// sintaxe reduzida
products.map((item) => console.log(item))

// utilizando o novo objeto retornado
const formatted = products.map((item) => {
    return products.toUpperCase()
})

console.log(formatted) // retorna ["TECLADO", "MOUSE", "MONITOR"]
