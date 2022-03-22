function iniciaJogo() {

}

//  Loop infinito para jogar novamente até o usuário desejar sair
//  ITEM #2
let jogar = true;
while(jogar) {  //  Implicitamente: jogar == true
    iniciaJogo();

    //  Inserir validação na entrada abaixo.
    //  TODO ITEM #5
    const resposta = prompt("Deseja jogar novamente?\n1 - SIM\n2 - NÃO").toLowerCase();
    if (resposta == 2) jogar = false;
}