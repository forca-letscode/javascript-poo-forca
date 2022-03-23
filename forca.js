class Usuario {
  constructor(nome, email) {
      this.nome = (nome == '')? "Sem Nome": nome;
      this.email = (email == '')? "Sem Nome": email;;
      //  Contador de Vitórias e Derrotas
      //  ITEM #4
      this.vitorias = 0;
      this.derrotas = 0; 
  }
  get getjogador(){
    return`Nome: ${this.nome}, E-mail: ${this.email}`
  }
}

function cadastro() {
  //  Inserir validação nas entradas abaixo.
  //  TODO ITEM #5
  //  ITEM #1
  const nome = prompt("Digite seu nome:");
  const email = prompt("Digite seu email:");
  const jogador = new Usuario(nome, email);
  //ver saida
  console.log(jogador.getjogador)
}

function sorteio (){
  let sorte = []
  const lista = [['AZUL','AMARELO','VERDE'],['BRASIL','ARGENTINA','VENEZUELA'], ['PROFESSORA','CARTEIRA','ESTUDANTES']];
  const tema = lista[Math.floor(Math.random() * lista.length)];
  //ver saida
  console.log(tema)

  const palavraSecreta = tema[Math.floor(Math.random() * tema.length)];
  sorte.push(palavraSecreta)

  let dica = ''
  switch (tema[0]) {
    case 'AZUL':
        dica = 'COR'
    break;
    case 'BRASIL':
        dica = 'PAIS'
    break;
    case 'PROFESSORA':
        dica = 'ESCOLA'
    break;
  }
  sorte.push(dica)
  return sorte
}

function dica(sorte){
  //ver saida
  console.log(sorte)
}

function opcao(){
  let op = prompt("Deseja continuar [S/N]").toUpperCase();
  console.log(op)
  switch (op) {
    case 'S':
      op = true
    break;
    case 'N':
      op = false
    break
    default:
      console.log('Opção invalida digite "S"= Sim e "N"= Não.')
      opcao()
    break;
  }
  return op
}

function iniciarJogo(){
  
}

let jogar = true;
while(jogar) {  //  Implicitamente: jogar == true
   cadastro()
  var sorte = sorteio();
  console.log(sorte[0])
  dica(sorte[1])

  jogar = opcao()

    //  Inserir validação na entrada abaixo.
    //  TODO ITEM #5
    
}