let option = 1

switch (option){
    case 1:
        console.log("Consultar Pedido")
    break
    case 2: 
        console.log("Falar com Atendente")
    break
    default:
        console.log("Inválido")
}

// o que ocorre neste caso, seria um exemplo de bot de whatsapp, a pessoa digita a opção que deseja
// se tirar o break ele irá executar todas as linhas
// com break, quando o caso é validado, ele encontra o comando break e para
// no switch a partir do momento que ele encontra um caso verdadeiro
// ele executa todos que vem depois dele

// no default seria: caso nenhuma das anteriores, independente do que digitar, retorna o modo inválido