function maiorNumero (primeiroNumero, segundoNumero) {
    if (primeiroNumero > segundoNumero) {
        return primeiroNumero + ' é maior que ' + segundoNumero;
    } else {
     return segundoNumero + ' é maior que ' + primeiroNumero;
    }
}
console.log(maiorNumero(50, 60));