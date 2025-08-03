// qual o comprimento de uma string

let message = "Estou estudando os fundamentos de JS"

console.log(message.length)
// retorna a quantidade de caracteres

// lenght é uma propriedade, não tem ()


let password = "12345"
    if(password.length < 6){
        console.log("A senha deve ter mais que 6 números")
    }

// se a senha tiver mais de 6 números ela não cai no if, não aparece a mensagem.
// se tiver menos, irá cair no if e na mensagem do console.log

// quantos dígitos tem um número? primeiro tem que transformar o número em string


let value = 12345
console.log(value) // aparece somente o valor

// agora mudamos

console.log(String(value).length) // transformou em um texto
// ou
console.log(value.toString.length)
