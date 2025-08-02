const form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault(); // previne o comportamento padrão de recarregar a pagina
    console.log('você fez submit no formulário!');
}

form.onsubmit = (event) => {
    event.preventDefault(); 
    console.log('você fez submit no formulário 2!');
}

// diferente de fazermos assim:

form.addEventListener("submit", (event) => {
    console.log('você fez submit no formulário 3!');
});

form.addEventListener("submit", (event) => {
    console.log('você fez submit no formulário 4!');
});

/* a diferença é que o onsubmit só pega a última função atribuída a ele, enquanto o addEventListener permite adicionar várias funções para o mesmo evento.


ou seja, ao interagir com o formulário, as mensagens do console serão:
- você fez submit no formulário 2!
- você fez submit no formulário 3!
- você fez submit no formulário 4!
 
não aparece o formulário 1 porque ele foi sobrescrito pelo formulário 2.

já no addEventListener, todas as funções são executadas, então aparecem as mensagens do formulário 3 e 4.
*/
