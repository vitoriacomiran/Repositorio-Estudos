// função que não possui nome
// guardar funções em variáveis

// não guarda o retorno dela, mas a própria função

const showMessage = function(message){
    console.log(message)
}   



// função normal
function dizerOi() {
  console.log("Oi!");
}
dizerOi(); // Executa a função

// função anônima atribuida a uma variável

const dizerOi = function() {
    console.log("Oi!");
    }
diszerOi(); // Executa a função


// quando usar funções anônimas? quando não precisamos reutilizar a função em outro lugar
// ou quando queremos passar a função como parâmetro para outra função
// quer guardar a função em uma variável para reutilizar depois
// quando trabalha com funções de array, como map, filter, reduce, foreach