// se a propriedade que estou tentando acessar dentro do objeto não existe, null ou undefined

// a expressão retorna undefined

console.user = {
    userName: "João",
    id: 1,
    age: 20,
    address: {
        city: "São Paulo",
        street: "No name",
    },
    message: function() {
        console.log(`Olá ${user.userName}`)
    }
}

console.log(user.address.street) // retorna a rua do endereço do usuário

// agora pensando que no cadastro, essas informações de endereço não são obrigatórias e o usuário não repondeu

// irá no console do inspecionar a página, dar erro em vermelho, undefined

// mas.. se o campo é opcional, como eu sei que teria dado erro?

// nesse caso, podemos fazer assim

console.log(user?.address?.street) // quando coloca o ? quer dizer que não sei se essa propriedade vai existir ou não

// nesse caso o erro só seria um 'undefined' escrito, nada de alerta, erro vermelhor nem nada disso

// eu não sei se o método está disponível, se está, executa, se não não faz nada

user.message?.()



