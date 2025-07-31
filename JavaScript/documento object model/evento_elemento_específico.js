// como identificar quando um evento é específico de um elemento
// Exemplo de código para identificar eventos específicos de um elemento


const ul = document.querySelector('ul');

ul.addEventListener("scroll", (event) => {
    console.log(event);
    
});

// O evento 'scroll' é específico do elemento 'ul'
// Isso significa que o evento 'scroll' foi disparado apenas quando o elemento 'ul' foi rolado
// e não quando outros elementos na página foram rolados.



