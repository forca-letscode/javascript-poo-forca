let nome = document.getElementById("nome");
let email = document.getElementById("email");
let tema = document.getElementById("tema");
let letra = document.getElementById("letra");

function iniciaJogo() {

    console.log('Nome:', nome.value, 'E-mail:', email.value, 'Tema:', tema.value);

    const palavras = {
        educacao: ['escola', 'biblioteca', 'professor'],
        saude: ['hospital', 'medicamento', 'enfermeiro'],
        meio_ambiente: ['ecossistema', 'fauna', 'flora']
    };

    let palavra;
    if(tema.value == "educacao") {
        palavra = palavras.educacao[Math.floor(Math.random() * palavras.educacao.length)];
        console.log('Palavra do tema educação:', palavra);
    } else if(tema.value == "saude") {
        palavra = palavras.saude[Math.floor(Math.random() * palavras.saude.length)];
        console.log('Palavra do tema saúde:', palavra);
    } else {
        palavra = palavras.meio_ambiente[Math.floor(Math.random() * palavras.meio_ambiente.length)];
        console.log('Palavra do tema meio ambiente:', palavra);
    }

    let forca = palavra.split('');
    forca2 = Array(forca.length).fill("_");
    let erro = 0;
    let acertou = false;

    console.log('forca:', forca);
    console.log('forca2:', forca2);

    document.getElementById("forca2").innerHTML = forca2.join(', ');


    function tentar() {
        while(erro < 7) {
            console.log('letra:', letra);
            for(let i = 0; i < forca.length; i++) {  // percorre a palavra letra por letra
    
                if(forca[i] == letra) {  // compara se a palavra contém a letra digitada
                    console.log('acertou', letra);
                    forca2[i] = letra;  //  adiciona a letra correta e no local correto
                    acertou = true;  // flag para não contabilizar erro
                    if(forca.join("") == forca2.join("")) erro = 8;  // verifica se a palavra está completa e finaliza
                    console.log('forca2:', forca2);
                }
            }
        }
    }
}