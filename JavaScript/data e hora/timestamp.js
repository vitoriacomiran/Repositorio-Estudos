// a data de referencia que o JS se baseia é meia noite, 01 de janeiro de 1970


// obtem informações da localidade através da api do js
const currentLocale = Intl.DateTimeFormat().
resolvedOptions()


console.log(currentLocale)

// exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))

const date = new Date()

// obtém a diferenteça em minutos do timezone
console.log(date.getTimezoneOffset())