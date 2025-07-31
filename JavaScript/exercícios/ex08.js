function calcularDesconto(valor){
    let precoDesconto = valor * 0.9
    return precoDesconto
}
let resultado = calcularDesconto(200)
console.log("O valor com desconto é", resultado)