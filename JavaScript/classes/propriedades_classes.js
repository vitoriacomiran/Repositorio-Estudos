class Product {
    constructor(name) {
        this.name = name
    }
}
const product = new Product("Teclado")
console.log(product.name)
// retorna Teclado
const product2 = new Product("Mouse")
console.log(product2.name)

// retorna Mouse 

class User {
    constructor(name, email){
        this.name = name // repassando as propriedades ao nosso objeto
        this.email = email
    }
}
const name = new User("Vitória")
const email = new User("vitoria@email.com")
console.log(User.name, User.email)
