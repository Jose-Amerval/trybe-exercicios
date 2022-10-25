function validacaoDosAngulos(anguloA, anguloB,  anguloC) {
    let somaDosAngulos = anguloA + anguloB + anguloC;
    let todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;
  
    if (todosAngulosPositivos) {
      if (somaDosAngulos === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }console.log(validacaoDosAngulos(100, 50, 30));
   

