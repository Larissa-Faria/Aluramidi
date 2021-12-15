function tocaSom(seletorAudio) { //function reproduz o som que está dentro do elemento audio do HTML
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();

    } else {
        //alert elemento nao encontrado
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //eventos do teclado-onkeydown-
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}