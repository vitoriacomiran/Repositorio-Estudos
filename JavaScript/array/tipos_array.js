let myArray = [
    "Um texto",
    10,
    true,
    function () {
        console.log("Função dentro do Array")
    },
    {
        name: "Vitória",
        email: "vitoria@gmail.com"
    }
]

console.log(myArray[0])
// retorna "Um texto"

console.log(myArray[1])
// retorna 10

console.log(myArray[3])
// retorna a função já executanto

console.log(myArray[4]).name
// retorna Vitória

console.log(myArray[4]).email
// retorna vitoria@gmail.com

