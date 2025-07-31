// interfaces garantem que objetos tenham a estrutura esperada, facilitando e prevenindo erros

// JS sem interface

const user1 = {
  nome: "Vitoria",
  idade: 28,
  email: "vitori@gmail.com"
}

function criarUsuario(dados) {
  return dados;
}

// sem garantia de estrutura
// pode ter qualquer estrutura


//typescript com interface
interface user2 {
  nome: string;
  idade: number;
  email: string;
  ativo?: boolean; // propriedade opcional, por isso o uso do ?
}
const user3 = {
  nome: "Vitoria",
  idade: 28,
  email: "vitori@gmail.com"
}

function criarUsuario2(dados: Usuario): Usuario {
  return dados;
}

// estrutura garantida