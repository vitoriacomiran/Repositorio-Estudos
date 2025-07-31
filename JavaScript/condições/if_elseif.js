let hour = 19

if(hour <= 12){
    console.log("Bom dia")
}
if(hour > 12){
    console.log("Boa tarde")
}
if(hour > 18){
    console.log("Boa noite")
}


// neste exemplo, o retorno será boa tarde e boa noite
// isso acontece porque o JS verifica todas as condições
// mesmo que na teoria seja apenas boa noite, ele passa pela condição
// de boa tarde, independente do local que ela esteja, e se o resultado da 
// variável corresponde, ele irá retornar. 
// cada if é verificado separadamente
// Então apareceria:

// boa tarde
// boa noite


let newHour = 19

if(newHour <= 12){
    console.log("Bom dia")
}
else if(newHour > 12){
    console.log("Boa tarde")
}
else if(newHour > 18){
    console.log("Boa noite")
}

// neste exemplo ele verifica até o boa tarde, como é validado ele não passa para o boa noite
// retorno:
// boa tarde

// outra opção seria
let sameHour = 19

if(sameHour <= 12){
    console.log("Bom dia")
}
else if(sameHour > 12 && sameHour <= 18){
    console.log("Boa tarde")
}
else {
    console.log("Boa noite")
}

// neste exemplo ele retorna o boa noite
// else é executado quando nenhuma das opções anteriores forem verdadeiras