const input = document.querySelector('input');
const form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault(); // impede o envio do formulário
// quero só texto
    const value = input.value
    const hasNumberRegex = /\d+/g

// lembrando: com d verificamos se tem número
// se tiver número, não pode ser enviado
// se não tiver número, pode ser enviado
    if (hasNumberRegex.test(value)) {
        alert("O texto contém números, digite novamente.");
    } else {
        alert("Texto enviado com sucesso!");
    }
}
// estes pontos são o breakpoint
// toda vez que o código atingir este ponto, ele vai parar
// e você pode inspecionar o estado do programa
// e as variáveis naquele momento
