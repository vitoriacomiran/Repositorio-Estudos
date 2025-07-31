const input = document.querySelector('input');

// nesse caso vamos manipular o atributo value do input

input.setAttribute("disabled", true)

// desabilitamos o input, a caixa de texto não pode ser editada

input.setAttribute("type", "file")

// o tipo do input foi alterado para file, agora o usuário pode selecionar arquivos

input.removeAttribute("id")

// removemos o atributo id do input, ele não terá mais esse identificador


