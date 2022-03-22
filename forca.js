class Usuario {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
        //  Contador de Vitórias e Derrotas
        //  ITEM #4
        this.vitorias = 0
        this.derrotas = 0
    }
}

function iniciaJogo() {
    //  Inserir validação nas entradas abaixo.
    //  TODO ITEM #5
    //  ITEM #1
    const nome = prompt("Digite seu nome:");
    const email = prompt("Digite seu email:");
    const jogador = new Usuario(nome, email);
}

//  Loop infinito para jogar novamente até o usuário desejar sair
//  ITEM #2
let jogar = true;
while(jogar) {  //  Implicitamente: jogar == true
    iniciaJogo();

    //  Inserir validação na entrada abaixo.
    //  TODO ITEM #5
    const resposta = prompt("Deseja jogar novamente?\n1 - SIM\n2 - NÃO");
    if (resposta == 2) jogar = false;
}
