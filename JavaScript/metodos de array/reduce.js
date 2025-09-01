/* utilizado para reduzir um array a um único valor

 Parâmetros:
- array original (values)
- acumulador (accumulator)
- valor da iteração (currentValue)
- valor inicial (0)
- index (index da iteração atual - opcional)

*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACCUMULATOR", accumulator)
    console.log("CURRENT VALUE", currentValue)
    console.log("INDEX", index)

    console.log("SOMA", accumulator + currentValue)
    console.log("########")

    return accumulator + currentValue
}, 0)

/*
basicamente isso fará o seguinte:
começa no zero, 0 + 1 = 1

o acumulador vira 1, 1 + 2 = 3
acumulador vira 3, 3 + 3 = 6
acumulador vira 6...

e assim por diante, ele irá percorrer cada index e realizar a soma de acordo com o que está no array.

*/