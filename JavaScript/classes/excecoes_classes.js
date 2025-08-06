let obj = []

try {
    obj.execute()
} catch (error) {
    console.log(error)
}

// vai dar erro TypeError

let obj1 = []

try {
    if (!obj1.includes(17)) {
    throw new Error("O número 17 não está disponível")
}   
}   catch (error) {
    if (error instanceof TypeError){
    console.log("Método indisponível")
    }
}
// trabalhando em cima de um erro

// foi passado para o construtor da classe error a mensagem através de 
// if (error instanceof TypeError)