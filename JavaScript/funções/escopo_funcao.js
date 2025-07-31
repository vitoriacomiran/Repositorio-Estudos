// conseguimos usar a função antes dela ser declarada
// devido ao comportamento de hosting

showMessage("Olá, Vitória")

function showMessage(message){
    console.log(message)
}

// é possivel colocar uma função dentro da função

showMessage("Olá, Vitória")

function showMessage(message){
    console.log(message)
    endLine()
    
    function endLine(){
        console.log("...............")
    }
}

// irá retornar: Olá, Vitória ..............
 