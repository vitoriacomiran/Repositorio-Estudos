// utilizado para identificar padrões em textos (strings)
// ex.: verificar se o e-mail inserido é válido, se a senha atende aos requisitos, etc.
// é uma forma de buscar e manipular strings de maneira eficiente


// definição de um padrão de expressão regular

// texto que o usuário digitou: 53A7B5C
// quero verificar se o texto é composto pelo padrão que queremos

/*  REGEX

/ = inicio do padrão
\d = onde aparece letras (vai ignorar os numeros)
+ = procura por sequencia de caracteres que não são digitos
/ = fim do padrão
g = global, ou seja, procura por todas as ocorrências no texto

*/

const regex = /\D+/g;
const texto = '53A7B5C';

// testando se o texto bate com o padrão
const resultado = texto.match(regex);   
console.log(resultado); // ['A', 'B', 'C']
