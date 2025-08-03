// break encerra a execução da repetição
// relembrando do caso de break em switch
let option = 3
switch(option){
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Atualizar")
        break
    case 3:
        console.log("Remover")
        break
    default:
        console.log("Opção inválida")
} 


// no caso de repetição
for(let i = 0; i < 10; i++){ // ex quero parar quando chegar em 5
    if (i == 5){
        break
    }
    
    console.log(i)
}

/* retorna
1
2
3
4

*/

