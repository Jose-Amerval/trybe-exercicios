// Crie uma variável player e atribua
// um objeto contendo as variáveis listadas abaixo:

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

// Acesse as chaves name, lastName e age com a sintaxe meuObjeto.chavec
console.log("A jogadora", player.name, player.lastName, "tem", player.age, "anos de idade.");

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log("A jogadora", player.name, player.lastName, "foi eleita eleita a melhor do mundo por " + player['bestInTheWorld'].length + ' vezes.');

//Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de pratas');