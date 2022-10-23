const ValorCustoProduto = 5;
const ValorProduto = 10;

if (ValorCustoProduto >= 0 && ValorProduto >= 0) {
    const custoTotal = ValorCustoProduto + ValorCustoProduto * 20 / 100;
    const lucro = (ValorProduto - custoTotal) * 1000;
    console.log(lucro);

} else {
    console.log('Erro, valor negativo!');
}