class Animal{
    constructor(name){
        this.name = name
    }
    makeNoise(){
        console.log("Miado")
    }
}

class Cat extends Animal { // extendes está herdando as propriedades da classe
    // não tem nada aqui
}

const cat = new Cat("Alvin")
    console.log(cat.name)
