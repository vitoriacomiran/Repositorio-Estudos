const guest = document.querySelector("ul")

const newGuest = document.createElement("li")
// cria um novo elemento li
const guestName = document.createElementNS("span")
// cria um novo elemento span dentro do li
guestName.textContent = "Vitoria"
// define o texto do span
guestName.append(guestName)

// usei o append para adicionar o span dentro do li após o ultimo filho

// se quero adicionar antes do ultimo filho, uso o prepend

