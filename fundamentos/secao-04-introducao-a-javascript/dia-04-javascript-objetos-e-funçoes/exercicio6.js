function maiorNumero (primeiroNum, segundoNum, terceiroNum) {
    if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
        return 'O ' + primeiroNum + ' é o maior número.';
    
    } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
        return 'O ' + segundoNum + ' é o maior número.'; 
    
    } else {
        return 'O ' + terceiroNum + ' é o maior número.';
    }
}
console.log(maiorNumero(60, 70, 10));