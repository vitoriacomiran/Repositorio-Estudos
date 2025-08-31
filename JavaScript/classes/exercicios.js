// Crie uma classe Carro com as propriedades marca e ano. 
//Crie um método detalhes() que retorna uma string com essas informações.

class Carro {
  constructor(marca, ano) {
    this.marca = marca;
    this.ano = ano;
  }
  detalhes(){
  console.log(`O carro é um ${this.marca} e seu ano é ${this.ano}`)
}
}

const carro = new Carro("jeep", 2018)
console.log(carro.detalhes())

//O carro é um Jeep e seu ano é 2018

//Crie uma classe Livro com as propriedades titulo e autor. 
//Crie um método chamado descricao() que retorna "O livro [titulo] foi escrito por [autor]".

class Book {
  constructor(titulo, autor){
  this.titulo = titulo;
  this.autor = autor;
  }
  descricao(){
    console.log(`O livro ${this.titulo} foi escrito por ${this.autor}`)
  }
}
const newBook = new Book ("O iluminado", "Sthephen King")
console.log(newBook.descricao())

// O livro O iluminado foi escrito por Sthephen King



