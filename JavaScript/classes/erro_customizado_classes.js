class MyCustomError {
    constructor(message){
        this.message = "Classe de Erro Customizada:" + message
    }
}

try {
    throw new MyCustomError ("Erro personalizado lançado")
} catch (error) {
    if (error instanceof MyCustomError) {
        console.log(error.message)
    } else {
        console.log("não foi possível executar")
    }
}