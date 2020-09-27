let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);

    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    //executa o código depois de tempo
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
        //element.classList.add('unselected');
    },number);   
}

//checa se os botoes clicados sao os mesmos da order gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameover();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Inicando próximo nível!`);
        nextLevel();
    }
}

//funcao para clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color== 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}


//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameover = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    blue.classList.remove('selected');
    yellow.classList.remove('selected');
    green.classList.remove('selected');
    red.classList.remove('selected');

    playGame();
}

//funcao para iniciar o jogo
let playGame = () => {
    alert('Bem vindo ao Genius-Clone! Iniciando novo jogo!');
    score = 0;
    nextLevel();
}

//eventos de click do jogo
green.onclick = () => click(0);
red.onclick = () => click(1);
blue.onclick = () => click(3);
yellow.onclick = () => click(2);

playGame();