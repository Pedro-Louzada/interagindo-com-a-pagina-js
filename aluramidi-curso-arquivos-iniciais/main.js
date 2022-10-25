function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido!');
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

// Enquanto

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // fizemos desta maneira para acessar a lista de classe de cada elemento e indiciar qual é o índice que quero pegar

    //template string

    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    };
}

