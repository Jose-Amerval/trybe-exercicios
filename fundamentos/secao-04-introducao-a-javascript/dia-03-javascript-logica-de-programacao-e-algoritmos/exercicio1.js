// criar um algoritmo que imprime o fatoral de 10: 10!

let fatorialDez = 1;
for (let index = 10; index > 0; index -= 1) {
  fatorialDez *= index;
}
console.log(fatorialDez);