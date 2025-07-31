// JS sem tipagem

function somar1(a, b) {
  return a + b;
}

function saudar1(nome) {
  console.log("Olá, " + nome);
}

somar1("2", "3") // resultado vai ser 23 em vez de 5


// com typescript

function somar2(a: number, b: number): number {
  return a + b;
}

function saudar2(nome: string): void {
  console.log("Olá, " + nome);
}

// erro detectado em tempo de compilação
// somar ("2", "3"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

//Exemplo
function calcularArea(largura: number, altura: number): number {
  return largura * altura;
}