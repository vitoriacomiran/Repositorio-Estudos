let users = []
// array vazio

// adicionar usuário ao final do Array
users.push("Vitória")
users.push("Ellen")
users.push("Gabi")


console.log(users)

// adicionar usuário no início do Array

users.unshift("Manu")
console.log(users)

/* retorna
0: Manu
1: Vitória
2: Ellen
3: Gabi
*/

// remover item do inicio do Array
users.shift()
console.log(users)

/* retorna
0: Vitória
1: Ellen
2: Gabi
*/

// remover item do final do Array
users.pop()
console.log(users)
/* retorna
0: Vitória
1: Ellen
*/