class Usuario {
    constructor(nome, email) {
        this.nome = nome 
        this.email = email
        //  Contador de Vitórias e Derrotas
        //  ITEM #4
        this.vitorias = 0
        this.derrotas = 0
    }

    get res(){
        return `${this.nome},${this.email}`
    }
  };
  
  function iniciaJogo() {
  
      //  ITEM #3
      const palavras = {
        educacao: ['escola', 'biblioteca', 'professor'],
        saude: ['hospital', 'medicamento', 'enfermeiro'],
        meio_ambiente: ['ecossistema', 'fauna', 'flora']
    };
    
    //  ITEM #5
    let tema = ''
    while (true){
        tema = prompt("Qual tema deseja jogar?\n1 - EDUCAÇÃO\n2 - SAÚDE\n3 - MEIO AMBIENTE");
        if (tema == 1 || tema == 2 || tema == 3){
            break;
        } else { alert('Opção invalida!!! digite 1, 2 ou 3.')}
    }
    console.log(tema)
  
    let palavra = '';
      if(tema == 1) {
          palavra = palavras.educacao[Math.floor(Math.random() * palavras.educacao.length)];
          console.log('Palavra do tema educação:', palavra);
      } else if(tema == 2) {
          palavra = palavras.saude[Math.floor(Math.random() * palavras.saude.length)];
          console.log('Palavra do tema saúde:', palavra);
      } else {
          palavra = palavras.meio_ambiente[Math.floor(Math.random() * palavras.meio_ambiente.length)];
          console.log('Palavra do tema meio ambiente:', palavra);
      }
  
      let forca = palavra.split('');
      let forca2 = Array(forca.length).fill("_");
  
      let erro = 0;
      let acertou = false;
  
      while(erro < 7) {
          //  ITEM #5
          let letra = ''
          while (true){
            letra = prompt('Digite uma letra:').toLowerCase();
            if (letra.length == 1){
                codigo = letra.charCodeAt(0)
                if (codigo >= 97 && codigo <= 122){
                    break;
                } else {alert('Digite apenas letras de A-Z.')}
                    
            } else {alert('Digite apenas uma caracter para continuar.')}
                
          }
          
          console.log('letra:', letra);
          for(let i = 0; i < forca.length; i++) {
              if(forca[i] == letra) {
                  console.log('acertou', letra);
                  forca2[i] = letra;
                  acertou = true;
                  if(forca.join("") == forca2.join("")) erro = 8;
                  console.log('forca2:', forca2);
              }
          }
        
          if(acertou == false) {
              console.log("Você errou!");
              console.log('Você usou: ', ++erro, " de 7 tentativas");
          }    
          acertou = false;    
      }
  
      if(forca.join("") == forca2.join("")) {
          console.log("Você ganhou!");
          jogador.vitorias++;
      } else {
          console.log("Você perdeu!");
          jogador.derrotas++;
      }
      console.log(`Vitórias: ${jogador.vitorias}\nDerrotas: ${jogador.derrotas}`);
  }
  
  function opcao(){
    let resp = prompt("Deseja continuar [S/N]").toUpperCase();
    switch (resp) {
      case 'S':
        op = true
      break;
  
      case 'N':
        op = false
      break;
  
      default:
        alert('Opção invalida digite "S"= Sim e "N"= Não.')
        opcao()
      break;
    }
    return op
  }
  
//  ITEM #1 e #5
let jogador = ''
while (true){
nome = prompt("Digite seu nome:");
email = prompt("Digite seu email:");
if (nome != '' && email != ''){
    jogador = new Usuario(nome, email);
    break;
} else { alert('Nome ou e-mail, invalido.')}
}
console.log(jogador.res)

op = true
while(op) {
    iniciaJogo()
    opcao();
    console.log(op);
    //console.log(op);
    console.log('//===========================//==========================//')
};
console.log('Fim de jogo!!!');
