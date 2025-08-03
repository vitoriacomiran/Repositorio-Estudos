// operador lógico  que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined.
// caso contrário ele retorna o seu operando do lado esquerdo

let content = null
console.log(content ?? "Conteúdo padrão")

// como content é nulo ele exibiu o que está do lado direito que é ''conteúdo padrão''
// se content fosse undefined, retornaria o ''conteúdo padrão'' também


let newContent = "Olá"
console.log(newContent ?? "Conteúdo padrão")

// nesse caso ele retorna o olá, pois não é null


const user = {
    name: "Vitória",
    image: undefined // não coloquei a imagem no perfil
}

console.log(user.image ?? "default.png")

// se o usuário definiu sua imagem, ela será exibida, caso não definiu, retornará a imagem padrão default que eu defini