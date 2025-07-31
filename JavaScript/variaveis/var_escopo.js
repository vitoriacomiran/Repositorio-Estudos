console.log(user)

var user = "Vitória"

// não irá dar erro, mas irá aparecer undefined

// escopo global
var email = "vitoria@email.com"
{
    // escopo de bloco
    console.log(email)
}

// o resultado será normal

// no caso de let

let email = "vitoria@email.com"
{
    console.log(email)
} // resultado ok pois respeita a hierarquia

 console.log(email)
{
   let email = "vitoria@email.com"
} // retornará erro pois a variável foi declarada depois
