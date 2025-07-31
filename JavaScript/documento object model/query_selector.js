const guest = document.querySelector('#guest')
console.log(guest)
// é possível acessar o DOM através do objeto document

const guests = document.getElementById('guests')
console.log(guests)

const guestsByClass = document.querySelectorAll('.guest')
console.log(guestsByClass)

// estes exemplos mostram como acessar elementos do DOM
// utilizando diferentes métodos do objeto document
// document.querySelector() retorna o primeiro elemento que corresponde ao seletor CSS
// document.getElementById() retorna o elemento com o ID especificado
// document.querySelectorAll() retorna todos os elementos que correspondem ao seletor CSS
// é possível acessar o DOM através do objeto document
// que é o nó raiz da estrutura do documento HTML


const guest1 = document.querySelector('#guest')
console.log(guest1.textContent)
// neste exemplo, o seletor é o conteúdo do elemento guest, visivel e oculto
console.log(guest1.innerText)
// innerText retorna o conteúdo visivel elemento
console.log(guest1.innerHTML)
// retorna o html como texto