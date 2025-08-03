let text = "Estudar, Aprender, Praticar"

// como separar a string
let separate = text.split(",") // irá separar onde tem a ,
console.log(separate) 
// retorna em frases separadas
// Estudar
// Aprender
// Praticar


// como unir a string
let joined = separate.join()
console.log(joined)

// retorna o texto normal "Estudar, Aprender, Praticar"

let joined1 = separate.join(" - ")
console.log(joined1)

// retorna "Estudar - Aprender - Praticar"
