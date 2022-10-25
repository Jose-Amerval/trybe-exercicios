// Escreva um programa que, dado um valor n qualquer, seja n > 1, 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
let n = 10;
let quadrado = ''

for (let linha = 1; linha <= n; linha += 1) {
    for (let coluna = 1; coluna <= n; coluna += 1) {
        quadrado += '*';   
    }
    console.log(quadrado)
    quadrado = '';
   
}
