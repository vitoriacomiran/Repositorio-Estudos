// função para instanciar objetos

function createProduct(name) { // criar a função para receber sempre o nome do produto
    const product = {} // criação de um objeto vazio que irá receber os detalhes abaixo
        product.name = name
        product.message = function(){ // criada uma função para poder reutilizar nos novos produtos depois
            console.log(`O nome do produto é ${this.name}`)
        
            return product
        }
    }

// estanciar é criar uma nova cópia na memória

const product1 = new createProduct("Teclado") // vai retornar um novo objeto a partir da função construtora
console.log(product1.name)
product1.message()


// aqui irá retornar Teclado e a mensagem


const product2 = new createProduct("Mouse") // vai retornar um novo objeto a partir da função construtora
console.log(product2.name)
product2.message()


console.log(product1 == product2) // irá retornar false