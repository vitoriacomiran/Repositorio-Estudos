let message = "Estou estudando os fundamentos de JS"

console.log(message) // retorna normal


console.log(message.replace("de JS", "do JavaScript")) // alterando o texto


console.log(message)
// retorna "Estou estudando os fundamentos do JavaScript"


// agora extrair uma parte da string (start, end)


console.log(message.slice(6, 30)) // retorna "estudando os fundamentos"

// extrair string(end, start)

console.log(message.slice(-2)) // retorna "JS"


let textWithSpace = "      TEXTO    "
console.log(textWithSpace.length) // retorna com os espaços

// quero retirar os espaços

console.log(textWithSpace.trim()) // retorna sem espaço
console.log(textWithSpace.trim().length) // mostra apenas os caracteres do texto