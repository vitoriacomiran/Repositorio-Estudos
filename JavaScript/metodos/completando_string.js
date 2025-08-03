// exemplo de um app de cartão de crédito que só mostra os últimos 4 dígitos

const creditCard = "123456789123456"
console.log(creditCard.length) // verifica a quantidade de caracteres


const lastDigts = creditCard.slice(-4) 
console.log(lastDigts) // retorna apenas os 4 dígitos


// substituir os anteriores por X


const maskedNumber = lastDigts.padStart(creditCard.length, "X")

console.log(maskedNumber) // vai retornar XXXXXXXXXXX3456

/*
nesse exemplo eu tenho um creditCard que verifiquei a quantidade de digitos
através do creditCard.length.

depois criei uma constante lastDigits com o método slice para deixar apenas os 4 últimos

por último criei uma constante maskedNumber para esconder os números anteriroes
e substituir por um X a partir da variável lastDigits

usei o método padStart para identificar o tamanho através do credotCard.length
no segundo parâmetro pedi para substituir por um "X"
*/