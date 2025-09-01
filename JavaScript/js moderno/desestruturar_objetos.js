const product = {
    description: "Teclado",
    price: 150,
}

const { description, price } = product
console.log("Descrição:", description)
console.log("Preço:", price)

function newProduct(description, price) {
    console.log("## Novo Produto")
    console.log("Descrição:", description)
    console.log("Preço:", price)
}

newProduct(description, price)