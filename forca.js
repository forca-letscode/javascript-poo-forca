// classe responsável por guardar registro de usuário e total de vitórias ou derrotas no jogo
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.vitorias = 0;
    this.derrotas = 0;
  }
  get res(){
      return `Nome: ${this.nome}\nEmail: ${this.email}`
  }
};

// validação de cadastro no objeto "jogador"
function cadastro() {
  nome = prompt("Digite seu nome:");
  email = prompt("Digite seu email:");
  if (nome == '' || email == ''){
      alert('Nome ou e-mail, invalido.');
      cadastro();   
  } else if (nome == null || email == null) jogador = new Usuario("Sem nome", "Sem email") ;
  else { 
      jogador = new Usuario(nome, email);
  }
  console.log(jogador.res)
} 

// inicia o jogo
function iniciaJogo() {
    // cadastro de temas a escolha do usuário
    const palavras = {
        educacao: ['escola', 'biblioteca', 'professor'],
        saude: ['hospital', 'medicamento', 'enfermeiro'],
        meio_ambiente: ['ecossistema', 'fauna', 'flora']
    };

let tema = ''
// filtro de opções para o "tema"
while (true){
    tema = prompt("Qual tema deseja jogar?\n1 - EDUCAÇÃO\n2 - SAÚDE\n3 - MEIO AMBIENTE");
    switch (tema) {
        case "1":
            tema = "Educação";
            break;
        case "2":
            tema = "Saúde";
            break;
        case "3":
            tema = "Meio Ambiente";
            break;
        default:
            alert('Opção invalida!!! digite 1, 2 ou 3.');
            continue;
    }
    break;
}
console.log("Tema escolhido:", tema);

  
  let palavra = '';
  // sorteio da "palavra" secreta conforme "tema"
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

    let forca = palavra.split(''); // divide "palavra" em um Array para analise, na variável "forca" 
    let forca2 = Array(forca.length).fill("_"); // clona Array "forca" substituindo de as letras por "_" (para efeito de comparação posterior)

    let erro = 0; // contador de erros
    let acertou = false; // funciona como chave de acertos e erros

    // enqunto usuário não erra 7 letras o jogo prossegui até todas as letras da "palavra" secreta seja descoberta
    while(erro < 7) {
        
        let letra = ''
        // filtro de entrada de cada letra digitada pelo usuário
        while (true){
          letra = prompt('Digite uma letra:').toLowerCase();
          if (letra.length == 1){
              codigo = letra.charCodeAt(0)
              if (codigo >= 97 && codigo <= 122){
                  break;
              } else {alert('Digite apenas letras de A-Z.')}
                  
          } else {alert('Digite apenas uma caracter para continue.')}
              
        }
        console.log('letra:', letra);

        // faz contagem de erros e acertos do usuário a cada letra e finaliza se hover 7 erros ou "palavra" seja descoberta
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

    // contagem de número de vitórias do jogador ou derrotas no final de cada jogada
    if(forca.join("") == forca2.join("")) {
        console.log("Você ganhou!");
        jogador.vitorias++;
    } else {
        console.log("Você perdeu!");
        jogador.derrotas++;
    }
    console.log(`Vitórias: ${jogador.vitorias}\nDerrotas: ${jogador.derrotas}`);
}

// decide o termino do jogo
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

// corpo principal
cadastro()
op = true
// loop infinito
while(op) {
  iniciaJogo()
  opcao();
  console.log(op);
  console.log('//===========================//==========================//')
};
// apos termino do jogo
console.log('Fim de jogo!!!')
