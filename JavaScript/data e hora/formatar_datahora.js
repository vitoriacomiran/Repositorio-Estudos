let date = new Date("2025-08-03T19:09:00")

console.log(date.getDate())
// retorna a data


console.log(date.getDate().toString().padStart(2, "0"))

// aqui defino que antes da data eu quero que tenha sempre dois dígitos e quando não tiver
// complete com o zero


console.log(date.getDate().toString().padStart(2, "0"))

// ou
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()

console.log(`${day}/${month}/${year}`)

// retorna 03/08/2025