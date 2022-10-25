// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja,
//  é divisível por 1 e por ele mesmo. Sabendo disso,
// escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
            38, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

let maiorPrimo = 0;


for (let numerador = 2; numerador <= 50; numerador += 1) {
  let primo = true;
  for (let divisor = 2; divisor < numerador; divisor += 1) {
    if (numerador % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorPrimo = numerador;
  }
}

console.log(maiorPrimo);