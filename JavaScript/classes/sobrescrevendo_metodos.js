class Animal{
    constructor(name){
        this.name = name
    }
    makeNoise(){
        console.log("Barulho Animal")
    }
}
class Cat extends Animal { 
    makeNoise(){
        console.log("Miau..")
    }
}
const cat = new Cat("Alvin")
    console.log(cat.name)
    cat.makeNoise()
class Dog extends Animal { 
    makeNoise(){
        console.log("Au..Au..")
    }
}
const dog = new Dog("Alvin")
    console.log(dog.name)
    dog.makeNoise()
