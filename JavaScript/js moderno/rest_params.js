// permite representar um número indefinido de argumentos como um array

function values(a, ...rest) {
    console.log(a)

    console.log(...rest)
}

values(1, 2)



// pode ser chamado de rest ou de args
// ele vai retornar tudo que esta dentro de values
// no console.log(a) vai retornar 1
// no console.log(...rest) vai retornar 1, 2

// só o rest vai mostrar quantos elementos estão dentro do array, no caso vai retornar 3