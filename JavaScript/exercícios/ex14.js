/*
Uma empresa paga bônus de 10% para seus funcionários. 
Crie uma função calcularSalarioComBonus que receba o salário base 
de um funcionário e retorne o valor total com o bônus aplicado.
*/

function calcularSalarioComBonus(valor){
    let salarioBonus = valor * 0.1
    return salarioBonus
}

let resultado = calcularSalarioComBonus(2000)

console.log("O sálario com o bonus é", resultado)