class Usuario {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
        //  Contador de Vitórias e Derrotas
        //  ITEM #4
        this.vitorias = 0
        this.derrotas = 0
    }
};

function iniciaJogo() {
    //  Inserir validação nas entradas abaixo.
    //  TODO ITEM #5
    //  ITEM #1
    const nome = prompt("Digite seu nome:");
    const email = prompt("Digite seu email:");
    const jogador = new Usuario(nome, email);

    //  ITEM #3
    const palavras = {
        educacao: ['escola', 'biblioteca', 'professor'],
        saude: ['hospital', 'medicamento', 'enfermeiro'],
        meio_ambiente: ['ecossitema', 'fauna', 'flora']
    };

    const tema = prompt("Qual tema deseja jogar?\n1 - EDUCAÇÃO\n2 - SAÚDE\n3 - MEIO AMBIENTE");
          
    console.log(tema);

    if(tema == 1) {
        let palavra = palavras.educacao[Math.floor(Math.random() * palavras.educacao.length)];
        console.log('palavra tema educação:', palavra);
    } else if(tema == 2) {
        let palavra = palavras.saude[Math.floor(Math.random() * palavras.saude.length)];
        console.log('palavra tema saúde:', palavra);
    } else {
        let palavra = palavras.meio_ambiente[Math.floor(Math.random() * palavras.meio_ambiente.length)];
        console.log('palavra tema meio ambiente:', palavra);
    }
};

//  Loop infinito para jogar novamente até o usuário desejar sair
//  ITEM #2
let jogar = true;
while(jogar) {  //  Implicitamente: jogar == true
    iniciaJogo();

    //  Inserir validação na entrada abaixo.
    //  TODO ITEM #5
    const resposta = prompt("Deseja jogar novamente?\n1 - SIM\n2 - NÃO");
    if (resposta == 2) jogar = false;
};