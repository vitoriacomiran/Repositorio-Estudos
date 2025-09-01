// testa se todos os elementos do array passam na condição e retorna um valor Boolean.

const ages = [1, 28, 15, 49]

// verificar se todas as idades são maiores ou iguais a 18

const result = ages.every((age) => age >= 18)

console.log(result) // retorna false pois tem 1 e 15, se todos fossem + 18 retornaria TRUE


