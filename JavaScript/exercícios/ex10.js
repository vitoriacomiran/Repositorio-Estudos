/*
Crie uma função que receba o valor total da compra e o tipo de cliente.
Se for cliente VIP, aplica 10% de desconto. 
Se for comum, não aplica nada

valorTotal
tipoCliente (vip, normal)

e

se vip = 10%
se comum = 0

a função deve retornar o valor final
*/

function calcularDesconto (valorTotal, tipoCliente) { // cria função com dois parâmetros
    if (tipoCliente === "VIP") { // verificar se o client é vip
        let valorComDesconto = valorTotal * 0.9
        return valorComDesconto
    } else {
        return valorTotal
    }
}

let resultado1 = calcularDesconto(100, "VIP")
console.log("Cliente VIP pagará:", resultado1)


let resultado2 = calcularDesconto(100, "comum")
console.log("Cliente comum pagará:". resultado2)