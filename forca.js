const nome = document.getElementById("nome");
const email = document.getElementById("email");
const tema = document.getElementById("tema");
const letra = document.getElementById("letra");
let jogador;
//  a linha abaixo impede que a página recarregue ao clicar em "Iniciar jogo!"
document.getElementById("jogador").addEventListener("submit", function(event) { event.preventDefault() });

class Usuario {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
      this.vitorias = 0;
      this.derrotas = 0;
    }

    info() { return `== Informações do Jogador ==\nNome: ${this.nome}\t\t|\tEmail: ${this.email}\nVitórias: ${this.vitorias}\t|\tDerrotas: ${this.derrotas}`; }
}

function verificaJogador() {

    if (nome.value == "" || email.value == "" || tema.value == "") return;
    else if (nome.disabled);    //  pula para a linha 30
    else {
        jogador = new Usuario(nome.value, email.value);
        nome.disabled = true;
        email.disabled = true;
    }

    console.log(jogador.info());
    jogar();
}

function sorteiaPalavra() {

    const palavras = {
        educacao: ['escola', 'biblioteca', 'professor'],
        saude: ['hospital', 'medicamento', 'enfermeiro'],
        meio_ambiente: ['ecossistema', 'fauna', 'flora']
    }

    // seleção da palavra a ser jogada
    let palavra, tema_txt;
    switch (tema.value) {
        case "educacao":
            tema_txt = "Educação";
            palavra = palavras.educacao[Math.floor(Math.random() * palavras.educacao.length)];
            break;
        case "saude":
            tema_txt = "Saúde";
            palavra = palavras.saude[Math.floor(Math.random() * palavras.saude.length)];
            break;
        case "meio_ambiente":
            tema_txt = "Meio Ambiente";
            palavra = palavras.meio_ambiente[Math.floor(Math.random() * palavras.meio_ambiente.length)];
            break;
    }

    console.log('Tema escolhido:', tema_txt);
    return palavra;
}

function jogar() {

    const resposta = sorteiaPalavra();
    const forca = resposta.split("");
    const forca2 = Array(forca.length).fill("_");

    // let erro = 0;
    // let acertou = false;

    // console.log('forca:', forca);
    // console.log('forca2:', forca2);

    // document.getElementById("forca2").innerHTML = forca2.join(', ');


    // function tentar() {
    //     while(erro < 7) {
    //         console.log('letra:', letra);
    //         for(let i = 0; i < forca.length; i++) {  // percorre a palavra letra por letra
    
    //             if(forca[i] == letra) {  // compara se a palavra contém a letra digitada
    //                 console.log('acertou', letra);
    //                 forca2[i] = letra;  //  adiciona a letra correta e no local correto
    //                 acertou = true;  // flag para não contabilizar erro
    //                 if(forca.join("") == forca2.join("")) erro = 8;  // verifica se a palavra está completa e finaliza
    //                 console.log('forca2:', forca2);
    //             }
    //         }
    //     }
    // }
}