const tema = document.getElementById("tema");
const letra = document.getElementById("letra");
const iniciar = document.getElementById("iniciar");
const div_forca = document.getElementById("forca");
const tentativas = document.getElementById("tentativas");
const forca_palavra = document.getElementById("forca-palavra");
let jogador, forca, forca2, chances = 7;
//  a linha abaixo impede que a página recarregue ao clicar em "Iniciar jogo!"
document.getElementById("jogador").addEventListener("submit", function(event) { event.preventDefault() });

class Usuario {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
      this.vitorias = 0;
      this.derrotas = 0;
    }
}

function verificaJogador() {

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");

    if (nome.value == "" || email.value == "" || tema.value == "") return;
    else if (nome.disabled);    //  pula para a linha 34
    else {
        jogador = new Usuario(nome.value, email.value);
        nome.disabled = true;
        email.disabled = true;
        tema.disabled = true;
        iniciar.disabled = true;
    }
    jogar();
}

function jogar() {

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

    forca = palavra.split("");  //  separa a palavra em letras
    forca2 = Array(forca.length).fill("_");     //  criar um array do mesmo tamanho e substitui as letras por "_"
    forca_palavra.textContent = forca2.join(" ");   //  exibe a palavra na tela ( _ )
    tentativas.textContent = chances;
    div_forca.style.display = "inline-block";   // exibe o elemento escondido
    
}

function tentar() {

    let acertou = false;
    const letra_minuscula = (letra.value).toLowerCase();
    
    for(let i = 0; i < forca.length; i++) { // percorre a palavra letra por letra
        if(forca[i] == letra_minuscula) {   // compara se a palavra contém a letra digitada
            forca2[i] = letra_minuscula;    //  adiciona a letra correta e no local correto
            acertou = true;     // flag para não contabilizar erro

            forca_palavra.textContent = forca2.join(" ");   //  atualiza a palavra na tela
            if(forca.join("") == forca2.join("")) {  // verifica se a palavra está completa e finaliza
                forca_palavra.textContent = forca2.join(" ");
                jogador.vitorias++;
                final(true);
            }
        }
    }

    if(acertou == false) {
        alert("Você errou!");
        tentativas.textContent = --chances;
        if (chances < 1) {
            jogador.derrotas++;
            final(false);
        }
    }

    letra.value = "";
    letra.focus();
}

function final(resultado) {

    let novamente;
    if (resultado) novamente = prompt(`Parabéns, você acertou a palavra!\nVitórias: ${jogador.vitorias}  |  Derrotas: ${jogador.derrotas}\nDeseja jogar novamente? [S/N]`);
    else novamente = prompt(`Que pena, você perdeu! A palavra era: ${forca.join("").toUpperCase()}\nVitórias: ${jogador.vitorias}  |  Derrotas: ${jogador.derrotas}\nDeseja jogar novamente? [S/N]`);

    if (novamente == null) final(resultado);
    else {
        switch (novamente.toUpperCase()) {
            case "S":
                repetir(true);
                break;
            case "N":
                repetir(false);
                break;
            default:
                final(resultado);
                break;
        }
    }
}

function repetir(resultado) {

    if (!resultado) location.reload();
    else {
        chances = 7;
        tema.disabled = false;
        iniciar.disabled = false;
        div_forca.style.display = "none";   // esconde o elemento
    }
}
