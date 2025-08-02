const input = document.querySelector('input');

input.addEventListener('input', (event) => {
    console.log(input.value);
});

// nesse caso o evento é disparado sempre que o valor do input é alterado
// pega o valor inteiro, e não letra por letra







input.addEventListener('input', () => {
    const regex = /\D+/g; // padrão para capturar caracteres não numéricos
    const valor = input.value;
    console.log(valor.match(regex)); // exibe os caracteres não numéricos
});

// se o usuário digitar "123abc456", o console exibirá ["abc"]






// se eu só quero verificar se tem número para saber se é valido ou nãoo


const isValid = regex.test(value);{
    console.log(isValid); // true se tiver números, false se não tiver
};






// se o usuário digitar V13 e eu quiser tirar a letra

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const regex = /\D+/g; 
    const value = input.value.replace(regex, "X")
});

console.log(value); // exibe o valor do input com as letras substituídas por "X"
// se o usuário digitar "V13", o console exibirá "X13"





// agora se eu quero retirar o V e deixar apenas os números

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const regex = /\D+/g;
    const value = input.value.replace(regex, "");
    console.log(value); // exibe o valor do input com as letras removidas
});

// "" isso deixará apenas os números, lembrar de não dar espaço, pois espaço é um caractere
// se o usuário digitar "V13", o console exibirá "13"




// se eu quiser fazer uma verificação:
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const regex = /\D+/g;

    const value = input.value
    if (regex.test(value)) {
        alert('Padrão OK');
    }
});

// irá aparecer um alerta na janela se o valor do input contiver caracteres não numéricos

// pode ser feito o contrário
// um alerta caso o usuário digitou numeros num campo que só aceita letras

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const regex = /\D+/g;

    const value = input.value
    if (!regex.test(value)) {
        alert('Valor inválido, apenas letras são permitidas');
    }
});

// o uso do ! antes do regex.test(value) inverte a lógica, ou seja, o alerta será exibido se o valor do input contiver apenas números, indicando que o valor é inválido para um campo que só aceita letras.
// se o usuário digitar "123", o alerta será exibido, pois o valor contém apenas números.



    
