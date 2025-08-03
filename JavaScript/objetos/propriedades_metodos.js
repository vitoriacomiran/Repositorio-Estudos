// criar objeto vazio
const obj = {}

// criar um objeto com propriedades e métodos
const user = {
    name: { // propriedade aninhada, propriedade dentro de outra
        firstName: "Vitória",
        lastName: "Comiran",
    },
    email: "vitoria@gmail.com",
    age: 28,
    address: { // mais uma propriedade aninhada
        street: "Paulo Polita",
        number: 22,
        city: "Passo Fundo",
    },
    message: function () {  // função dentro do objeto
        console.log("Olá Vitória")
    },
}

// acessar as propriedades e métodos usando a notação de ponto
console.log(user.email) // pega o objeto e escolhe a propriedade através do ponto
console.log(user.name.firstName) // propriedade fistName dentro de name dentro do objeto user
user.message() // irá retornar a função message dentro do objeto user => Olá Vitória


// acessando propriedades no contexto do objeto
const person = {
    newName: "Vitória",
    newMessage: function(){
        console.log(`Olá ${user.newNameame}`)
    }
}

// neste exemplo eu estou gerando um função que contém uma mensagem que acessa a propriedade newName do meu objeto Person
// se eu alterar o valor de newName a função irá retornar o novo valor

// pode trocar o console.log(`Olá ${user.newNameame}`) para console.log(`Olá ${this.newNameame}`)
// o uso do this vai referenciar 'este objeto' no caso é user
// mas essa opção só funciona com função anônima function() não funciona com arrow function () =>