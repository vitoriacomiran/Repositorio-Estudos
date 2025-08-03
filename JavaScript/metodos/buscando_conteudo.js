let message = "Estou estudando os fundamentos do JS"

// obter a posição da palavra
console.log(message)  // aparece o conteudo normal

console.log(message.indexOf("estudando"))

// aparece a partir da posição 6

// quando não encontra retorna -1, por exemplo se eu escrevesse Estudando


// verificar se tal string existe no texto
console.log(message.includes("JS"))

// retorna true

console.log(message.includes("HTML"))

// retorna false