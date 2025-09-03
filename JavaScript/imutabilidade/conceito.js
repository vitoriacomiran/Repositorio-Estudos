/* uma vez que algo imutável é criado, você não pode
modificar seus valores ou propriedades.
Em vez disso você cria uma cópia modificada para manter o original inalterado.

*/

const address1 = {
    street: "Av. Brasil",
    number: 20,
}

const address2 = address1
address2.number = 30

/*
nesse caso o address dois não cria uma cópia
ele modifica o address 1, pois ele faz referência, usando o mesmo espaço da memória alocado



existem duas maneiras de alterar dados:
1. mutar o dado alterando diretamente seu valor
2. substituir o dado antigo por uma nova cópia com as alterações desejadas.

*/

const address3 = {
    street: "Av. Brasil",
    number: 20,
}

const address4 = { ...address3 }
address4.number = 30

//ou

const address4 = { ...address3, number: 30 }

/*

nesse caso usa o spread operator, cria um novo objeto na memória

a imutabilidade é utilizada para otimizar a atualização do DOM 
e para fornecer um modelo mais previsível no desenvolvimento de interfaces

*/