const pecaDeXadrez =  'cavalo'
switch (pecaDeXadrez.toLowerCase()) {
    case 'cavalo':
        console.log('Cavalo -> Move-se em L e pula peças.');
        break;
    case 'rei':
        console.log('Rei ->  Move-se para qualquer direção apenas uma casa.');
        break;
    case 'bispo':
        console.log('Bispo -> Move-se em diagonal quantas casas quiser.');
        break;
    case 'rainha':
        console.log('Rainha -> Move-se para qualquer direção quantas casas quiser.')
        break;
    case 'torre': 
        console.log('Torre -> Move-se em horizontal e vertical quantas casas quiser se não estiver ocupada.');
        break;
    case 'peão':
        console.log('Peão -> Move-se para frente apenas uma casa.')
        break;
        default:
          console.log('Erro, peça não pertence ao xadrez!'); 
          
    }      

