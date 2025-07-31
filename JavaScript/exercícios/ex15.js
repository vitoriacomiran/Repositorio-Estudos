/*
Crie uma função calcularIMC que receba dois parâmetros: 
peso e altura, e retorne o IMC (Índice de Massa Corporal).
*/

function calcularIMC(peso, altura){
    let alturaMetros = altura / 100
    let imc = peso / (alturaMetros*alturaMetros)
    return imc
}

let resultado = calcularIMC(56, 170)

console.log("Seu IMC é", resultado.toFixed(2))