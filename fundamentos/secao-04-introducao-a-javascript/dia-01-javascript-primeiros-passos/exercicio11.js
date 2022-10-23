const angulo1 = 20;
const angulo2 = 120;
const angulo3 = 40;

if (angulo1 + angulo2 + angulo3 === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0 ) {
   console.log('True');

} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log('False');  

} else {
    console.log('Você não é um triângulo válido!');
}

 