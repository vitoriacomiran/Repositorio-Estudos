// Crie uma função converterParaFahrenheit que receba uma temperatura em Celsius 
// e retorne essa temperatura convertida para Fahrenheit.

//  Fórmula: Fahrenheit = Celsius × 1.8 + 32

function converterParaFahrenheit(temperatura){
    let conversao = (temperatura * 1.8) + 32
    return conversao
}

let resultado = converterParaFahrenheit(22)
console.log("A temperaruta em Fahrenheit é", resultado)