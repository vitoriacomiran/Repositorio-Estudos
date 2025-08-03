// executa um bloco de código várias vezes de acordo com uma condição específica

let execute = true
while (execute) {
   let response = window.prompt("Deseja Continuar? 1 (SIM) 2 (NÃO)")

   if (response === "2")
    execute = false
}

console.log("Segue o fluxo...")