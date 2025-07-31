window.addEventListener("load", () => {
    console.log("A página foi carregada com sucesso!");

});

// metodo que observa tudo que ocorre na janela (window) a partir do parâmetro indicado
// nesse caso, o evento "load" que é disparado quando a página é completamente carregada



addEventListener("click", (event) => {
    console.log("O elemento foi clicado!");
    console.log(event);
});

// neste exemplo, o evento "click" é adicionado ao objeto window
// e quando o usuário clica em qualquer lugar da página, a mensagem é exibida no console


