// testa se ao menos um dos elementos no array passa na condição e retorna um valor true ou false.


const ages = [15, 30, 39, 58]

const result = ages.some((age) => age < 18)

console.log(result) // retorna true pois alguns números são maiores que 18
// se todos fosse menores retoraria FALSE

