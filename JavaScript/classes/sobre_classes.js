// classes - forma de criar objetos e definir comportamentos por meio de construtores e métodos.

// possui construtor = método especial chamado quando um objeto é instanciado a partir da classe

// pode adicionar métodos a uma classe = funções associadas a objetos e descrevem o comportamento desses objetos


// herança = uma classe pode herdar propriedades e métodos de outra classse

class Person {
    constructor(){
        console.log("Classe Instanciada..")
    }
}
const person = new Person()

// toda vez que se instancia a classe o método construtor é executado

class Animal {
    constructor(cat){
        console.log("This is my cat", cat)
    }
}
const animal = new Animal("Fred")