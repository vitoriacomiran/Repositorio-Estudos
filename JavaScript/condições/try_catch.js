console.log(result)

// a variável não existe
// irá dar erro
// agora vou colocar dentro de um bloco de try/catch

try {
// tenta executar algo
    console.log(result) // não exibe mais erro, mas não exibe nada até então
} catch (error) {
// captura o erro para tratar
    console.log(error) // irá aparecer o erro de forma amigável
}

// é possivel adicionar uma mensagem por exemplo

try {
    console.log(result)
} catch (error){
    console.log("Não foi possível executar seu pedido")
} finally {
    console.log("Fim") // independente se deu certo ou errado ele finaliza o processo
}

// existem exceções 
// gerar exceções personalizadas para avisar o usuário

let result = 1
try {
    if (result === 0){
        throw new Error("O valor é igual a zero.")
    }
} catch (error) {
    console.log(error)
} finally {
    console.log("Fim")
}