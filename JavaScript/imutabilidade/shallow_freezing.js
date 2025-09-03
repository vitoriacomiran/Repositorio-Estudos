const book = {
    title: "IT",
    category: "horror",
    author: {
        name: "Stephen King",
        age: 66,
    },
}

book.category = "fantasy"

// o js não impõe restrições à modificações dos objetos

Object.freeze(book)
book.category = "fantasy"


// não irá mudar

// mas o objeto aninhado irá mudar, por exemplo
book.author.age = 70

// irá mudar