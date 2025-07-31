// callback é uma função que é passada como parâmetro para outra função
// e é executada dentro dessa função, geralmente após algum evento ou ação


function execute(taskName, callback){
    console.log(`Executando a tarefa: ${taskName}`);      
    // aqui podemos chamar a função de callback

    callback() // executa a função de callback
}
 function callback(){
    console.log("Tarefa concluída com sucesso!")
 }


execute("Download do arquivo", callback) // passando a função callback como parâmetro

// ou seja, eu criei uma função chamada execute, com o parâmetro taskName e callback.
// dentro dessa função, eu executo a tarefa e depois chamo a função de callback.
// logo abaixo eu tenho outra função chamada callback, que é a função que será executada após a tarefa ser concluída.
// no final eu chamo a função execute, passando o nome da tarefa e a função callback como parâmetros.
// isso é muito útil quando queremos executar uma ação após outra ação ser concluída, como por exemplo, fazer uma requisição a uma API e depois processar os dados recebidos.
// é uma forma de programação assíncrona, onde podemos executar uma ação após outra ação ser concluída



// exemplo 2: criando a função no próprio parâmetro

execute("Download do arquivo", function() {
    console.log("Tarefa concluída com sucesso!")
})

// nesse exemplo, eu criei a função callback diretamente no parâmetro da função execute.
// a função foi criada anonima, ou seja, não tem nome.