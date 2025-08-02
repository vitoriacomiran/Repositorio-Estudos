const input = document.querySelector('input');

// evento de kaydown - quando uma tecla é pressionada (captura tudo)

input.addEventListener('keydown', (event) => {
    console.log('você pressionou a tecla:', event.key);
});

// dispara quando uma tecla do tipo caractere é pressionada (ex: letras, números, símbolos

input.addEventListener('keypress', (event) => {
    console.log('você pressionou a tecla (keypress):', event.key);
});

// nesse caso quando você sair do local do input, o evento é disparado
input.onchange = (event) => {
    console.log('você alterou o valor do input:', event.target.value);
};

// nesse caso é uma variação do onchange, que dispara quando o valor do input é alterado
// foi usada uma função separada para demonstrar a diferença de uso
function inputChange(event) {
    console.log('você alterou o valor do input:', event.target.value);
}
