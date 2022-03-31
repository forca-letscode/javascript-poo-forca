
//  as linhas abaixo impedem que a página recarregue ao clicar nos botões
document.getElementById("jogador").addEventListener("submit", function(event) { event.preventDefault() });
document.getElementById("tentar-botao").addEventListener("submit", function(event) { event.preventDefault() });

class Usuario {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
      this.vitorias = 0;
      this.derrotas = 0;
    }
}

/* Função criarJogador() é:
- pura, pois não depende de fatores externos
- composta ?? 
*/
function criarJogador() {

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const tema = document.getElementById("tema");
    const iniciar = document.getElementById("iniciar");

    if (nome.value == "" || email.value == "" || tema.value == "") return;
    else if (nome.disabled);    //  pula para a linha 35
    else {
        let jogador = new Usuario(nome.value, email.value);
        nome.disabled = true;   //  desativa os inputs
        email.disabled = true;
        tema.disabled = true;
        iniciar.disabled = true;
    }
    jogar(tema);
}

// Função jogar() é impura, pois são utilizadas 2 funções da biblioteca Math 
function jogar(tema) {

    let chances = 7;

    const div_forca = document.getElementById("forca");
    const tentativas = document.getElementById("tentativas");
    const forca_palavra = document.getElementById("forca-palavra");

    const palavras = {
        educacao: ['escola', 'biblioteca', 'professor'],
        saude: ['hospital', 'medicamento', 'enfermeiro'],
        meio_ambiente: ['ecossistema', 'fauna', 'flora']
    }

    // seleção da palavra a ser jogada
    let palavra;
    switch (tema.value) {
        case "educacao":
            palavra = palavras.educacao[Math.floor(Math.random() * palavras.educacao.length)];
            break;
        case "saude":
            palavra = palavras.saude[Math.floor(Math.random() * palavras.saude.length)];
            break;
        case "meio_ambiente":
            palavra = palavras.meio_ambiente[Math.floor(Math.random() * palavras.meio_ambiente.length)];
            break;
    }

    // mantendo a imulatibilidade da variável 'palavra'
    let forca = palavra.split("");  //  separa a palavra em letras
    let forca2 = Array(forca.length).fill("_");     //  criar um array do mesmo tamanho e substitui as letras por "_"
    forca_palavra.textContent = forca2.join(" ");   //  exibe a palavra na tela ( _ )
    tentativas.textContent = chances;   //  atualiza o contador de chances
    div_forca.style.display = "inline-block";   // exibe o elemento escondido
}

// Função tentar() é impura, pois utiliza a função toLowerCase()
function tentar() {

    const letra = document.getElementById("letra");
    
    const letra_minuscula = (letra.value).toLowerCase();
    if (letra_minuscula == "") return;
    let acertou = false;
    
    for(let i = 0; i < forca.length; i++) { // percorre a palavra letra por letra
        if(forca[i] == letra_minuscula) {   // compara se a palavra contém a letra digitada
            forca2[i] = letra_minuscula;    //  adiciona a letra correta e no local correto
            acertou = true;     // flag para não contabilizar erro

            forca_palavra.textContent = forca2.join(" ");   //  atualiza a palavra na tela
            if(forca.join("") == forca2.join("")) {  // verifica se a palavra está completa e finaliza
                jogador.vitorias++;
                final(true);
            }
        }
    }

    if(!acertou) {
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
    if (resultado) novamente = prompt(`Parabéns, você acertou a palavra ${forca.join("").toUpperCase()}!\nVitórias: ${jogador.vitorias}  |  Derrotas: ${jogador.derrotas}\nDeseja jogar novamente? [S/N]`);
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

// Função tentar() é impura, pois utiliza a função reload()
function repetir(resultado) {

    if (!resultado) location.reload();  //  recarrega a página
    else {
        chances = 7;
        tema.disabled = false;
        iniciar.disabled = false;
        div_forca.style.display = "none";   // esconde o elemento
    }
}
