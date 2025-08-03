let date = new Date("2025-08-03T19:09:00")

console.log(date.toLocaleString())
// data e horário separado por vírgula de acordo com a localidae

console.log(
    date.toLocaleString("pt-BR", { // padrão português Brasil
    dateStyle: "long"
    })
)
// aqui retorna 03 de agosto de 2025

console.log(
    date.toLocaleString("pt-BR", { // padrão português Brasil
    dateStyle: "medium"
    })
)
// aqui retorna 03 de ago de 2025

console.log(
    date.toLocaleString("pt-BR", { // padrão português Brasil
    dateStyle: "full"
    })
)
// aqui retorna domingo, 03 de agosto de 2025


console.log(
    date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    })
)


// pode usar o toLocaleString para isso

let amount = 12.5
console.log(
    amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
)

// irá retornar R$ 12,50
