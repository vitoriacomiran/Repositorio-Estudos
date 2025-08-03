// for..in executa interações a partir de um objeto e percorre as propriedades

let person = {
    name: "Vitória",
    age: 28,
    email: "vitoria@email.com"
}

let steps = 1

for (let property in person){ // percorrendo as propriedades dentro da variável person
    console.log(steps) // vai mostrar quantas voltas deu
    
    console.log(property) // exibe o nome da propriedade, não o conteúdo

// ou
    console.log(person[property]) // exibe o conteúdo da propriedade

}



console.log(steps)
/* ficaria assim
1
name
Vitória

2
age
28

3
email
vitoria@email.com

*/

// for in com array

let students = ["João", "Maria", "Pedro"]

for(let index in students){
    console.log(students[index])
}

/* retorna
João
Maria
Pedro
*/

