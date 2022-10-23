let statusCandidata = 'aprovada' || 'reprovada' || 'lista'

switch (statusCandidata) {
   case 'aprovada':
   console.log('Parabéns, você foi aprovada(o).'); 
       break;

   case 'lista':   
   console.log('Vocês está na nossa lista de espera.');
       break;

    case 'reprovada':
    console.log('Você foi reprovada.');
       break;

       default:
        console.log('Informação incorreta');
}


