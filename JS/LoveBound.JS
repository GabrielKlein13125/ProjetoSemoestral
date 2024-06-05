const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');
const option3Button = document.getElementById('option3');

var imagemDeFundo = new Image();
imagemDeFundo.src = 'IMG/background.png';

// Adicione a tag de áudio para o som do botão
var buttonAudio = new Audio('SND/shine-magic-sound-4-sounds-190258 (mp3cut.net).mp3');

imagemDeFundo.onload = function() {
    ctx.drawImage(imagemDeFundo, 0, 0, canvas.width, canvas.height);
}

var audio = new Audio('SND/Classroom Sound Effects, Classroom Noises, No Copyright, Royalty Free Sounds.mp3');
audio.loop = true;

var audio2 = new Audio('SND/Students Talking in Classroom (Auditorium School College Class Ambience Background Noise....mp3');
audio2.loop = true;

var audio3 = new Audio('SND/warsaw-university-library-58740.mp3');
audio3.loop = true;

var audio4 = new Audio('SND/video final - paquera.mp3');
audio.loop = true;

let currentScene = 'start';
let choices = [];

function drawText(text) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(text, 20, 20);
}

function drawImage(src, callback) {
    const image = new Image();
    image.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        if (callback) callback();
    };
    image.src = src;
}

function startGame() {
    drawImage('IMG/Capa.png', () => {
        option1Button.innerText = 'Play';
        option1Button.onclick = começoDoJogo;
    });
}

function começoDoJogo() {
    audio2.play();

    buttonAudio.play();
    
    currentScene = 'MarianaEncontro1';
    drawImage('IMG/StartGame.png', () => {
        option1Button.innerText = 'Próximo';
        option1Button.onclick = MarianaEncontro1;
    });
}

function MarianaEncontro1() {
    // Reproduzir áudio ao clicar no botão
    buttonAudio.play();
    
    drawImage('IMG/MarinaEncontro1.png', () => {
        option1Button.innerText = 'Oh! Mas já? Eu mal cheguei?';
        option1Button.onclick = MarianaEncontro2;
    });
}

function MarianaEncontro2() {
    buttonAudio.play();

    drawImage('IMG/MarinaEncontro2.png', () => {
        option1Button.innerText = 'A) Sim, seria um prazer.';
        option1Button.onclick = () => {
            choices.push('A');
            MarianaEncontro1A();
        };
        option2Button.style.display = 'inline';
        option2Button.innerText = 'B) Por enquanto não, acabei de chegar, tenho muita matéria atrasada para pegar.';
        option2Button.onclick = () => {
            choices.push('B');
            MarianaEncontro1B();
        };
        option3Button.style.display = 'inline';
        option3Button.innerText = 'C) Não, eu não sirvo para isso.';
        option3Button.onclick = () => {
            choices.push('C');
            MarinaEncontro1C();
        };
    });
}

function MarianaEncontro1A() {

    buttonAudio.play();

    drawImage('IMG/MarinaLucasCaminho1.png', () => {
        option1Button.innerText = 'Ir para a Biblioteca';
        option1Button.onclick = TrocaDeCenario1;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function MarianaEncontro1B() {

    buttonAudio.play();

    drawImage('IMG/MarinaLucasCaminho2.png', () => {
        option1Button.innerText = 'Ir para a Biblioteca';
        option1Button.onclick = TrocaDeCenario1;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function MarinaEncontro1C() {

    buttonAudio.play();

    drawImage('IMG/MarinaLucasCaminho2.png', () => {
        option1Button.innerText = 'Ir para a Biblioteca';
        option1Button.onclick = TrocaDeCenario1;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function TrocaDeCenario1() {

    audio2.pause();
    audio3.play();
    buttonAudio.play();

    drawImage('IMG/TrocaDeCenarioBiblioteca.png', () => {
        option1Button.innerText = 'Próximo';
        option1Button.onclick = EncontroMateus1;
    });
}

function EncontroMateus1() {

    buttonAudio.play();

    drawImage('IMG/EncontroMateus1.png', () => {
        option1Button.innerText = 'Oi, prazer, sou a Sofia, aluna nova, você sabe onde fica a sessão de romances?';
        option1Button.onclick = PerguntasMateus1;
    });
}

function PerguntasMateus1() {

    buttonAudio.play();

    drawImage('IMG/EncontroMateus2.png', () => {
        option1Button.innerText = 'A) Costumo ler mais livros científicos, estou experimentando algo novo.';
        option1Button.onclick = () => {
            choices.push('A');
            PerguntasMateus1A();
        };
        option2Button.style.display = 'inline';
        option2Button.innerText = 'B) Sim! Amo muito toda arte, poesias, músicas, pinturas.';
        option2Button.onclick = () => {
            choices.push('B');
            PerguntasMateus1B();
        };
        option3Button.style.display = 'inline';
        option3Button.innerText = 'C) Estou lendo por obrigação.';
        option3Button.onclick = () => {
            choices.push('C');
            PerguntasMateus1C();
        };
    });
}

function PerguntasMateus1A() {

    buttonAudio.play();

    drawImage('IMG/MateusCaminho1.png', () => {
        option1Button.innerText = 'Ir para o Corredor';
        option1Button.onclick = TrocaDeCenario2;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function PerguntasMateus1B() {

    buttonAudio.play();

    drawImage('IMG/MateusCaminho2.png', () => {
        option1Button.innerText = 'Ir para o Corredor';
        option1Button.onclick = TrocaDeCenario2;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function PerguntasMateus1C() {

    buttonAudio.play();

    drawImage('IMG/MateusCaminho1.png', () => {
        option1Button.innerText = 'Ir para o Corredor';
        option1Button.onclick = TrocaDeCenario2;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function TrocaDeCenario2() {

    audio3.pause();
    audio2.play();

    buttonAudio.play();
    drawImage('IMG/TrocaDeCenarioCorredor.png', () => {
        option1Button.innerText = 'Próximo';
        option1Button.onclick = EncontroPedro;
    });
}

function EncontroPedro() {
    buttonAudio.play();
    drawImage('IMG/PedroEncontro1.png', () => {
        option1Button.innerText = 'Ei, não fala assim comigo! Eu tenho nome, sabia?';
        option1Button.onclick = PerguntasPedro1;
    });
}

function PerguntasPedro1() {
buttonAudio.play();
    drawImage('IMG/PedroEncontro2.png', () => {
        option1Button.innerText = 'A) Se tivesse sido mais educado eu responderia.';
        option1Button.onclick = () => {
            choices.push('A');
            PerguntasPedro1A();
        };
        option2Button.style.display = 'inline';
        option2Button.innerText = 'B) Sofia.';
        option2Button.onclick = () => {
            choices.push('B');
            PerguntasPedro1B();
        };
        option3Button.style.display = 'inline';
        option3Button.innerText = 'C) NÃO É DA SUA CONTAAAAAA!!!';
        option3Button.onclick = () => {
            choices.push('C');
            PerguntasPedro1C();
        };
    });
}

function PerguntasPedro1A() {
    buttonAudio.play();
    drawImage('IMG/PedroCaminho1.png', () => {
        option1Button.innerText = 'Ir para a sala';
        option1Button.onclick = SalaDeAula;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function PerguntasPedro1B() {
    buttonAudio.play();
    drawImage('IMG/PedroCaminho2.png', () => {
        option1Button.innerText = 'Ir para a sala';
        option1Button.onclick = SalaDeAula;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function PerguntasPedro1C() {
    buttonAudio.play();
    drawImage('IMG/PedroCaminho3.png', () => {
        option1Button.innerText = 'Ir para a sala';
        option1Button.onclick = SalaDeAula;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function SalaDeAula() {

    audio2.pause();
    audio.play();

    buttonAudio.play();
    drawImage('IMG/TrocaDeCenarioSala.png', () => {
        option1Button.innerText = 'Próximo';
        option1Button.onclick = Professor1;
    });
}

function Professor1() {
    buttonAudio.play();
    drawImage('IMG/EncontroProfessor1.png', () => {
        option1Button.innerText = 'Eu sou a aluna nova, Sofia.';
        option1Button.onclick = Professor2;
    });
}

function Professor2(){
    buttonAudio.play();
    drawImage('IMG/EncontroProfessor2.png', () => {
        option1Button.innerText = 'A) Posso trocar minha eletiva?';
        option1Button.onclick = Professor2A;
        option2Button.style.display = 'inline';
        option2Button.innerText = 'B) Gosto da sua matéria.';
        option2Button.onclick = Professor2B;
        option3Button.style.display = 'inline';
        option3Button.innerText = 'C) Sou uma entusiasta da música, quer ouvir alguns sons meus?';
        option3Button.onclick = Professor2C;
    });
}

function Professor2A(){
    buttonAudio.play();
    drawImage('IMG/ProfessorCaminho1.png', () => {
        option1Button.innerText = 'Próximo';
        option1Button.onclick = GrupoEncontro1;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function Professor2A() {
    buttonAudio.play();
    drawImage('IMG/ProfessorCaminho1.png', () => {
        option1Button.innerText = 'Vou encontrar o meu grupo.';
        option1Button.onclick = GrupoEncontro1;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function Professor2B() {
    buttonAudio.play();
    drawImage('IMG/ProfessorCaminho2.png', () => {
        option1Button.innerText = 'Vou encontrar o meu grupo.';
        option1Button.onclick = GrupoEncontro1;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function Professor2C() {
    buttonAudio.play();
    drawImage('IMG/ProfessorCaminho2.png', () => {
        option1Button.innerText = 'Vou encontrar o meu grupo.';
        option1Button.onclick = GrupoEncontro1;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function GrupoEncontro1() {
    buttonAudio.play();
    drawImage('IMG/EncontroGrupo.png', () => {
        option1Button.innerText = 'Próximo';
        option1Button.onclick = LucasSala;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}



function LucasSala() {
    buttonAudio.play();
    drawImage('IMG/LucasEncontroSala.png', () => {
        option1Button.innerText = 'A) É uma eletiva obrigatória que tenho que fazer... preferia estar estudando algo de verdade.';
        option1Button.onclick = () => {
            choices.push('A');
            PedroSozinhoSala();
        };
        option2Button.style.display = 'inline';
        option2Button.innerText = 'B) Eu adoro música, mas não é meu curso.';
        option2Button.onclick = () => {
            choices.push('B');
            PedroSozinhoSala();
        };
        option3Button.style.display = 'inline';
        option3Button.innerText = 'C) Então... Eu faço música, haha.';
        option3Button.onclick = () => {
            choices.push('C');
            PedroSozinhoSala();
        };
    });
}


function PedroSozinhoSala() {
    buttonAudio.play();
    drawImage('IMG/PedroEncontroSala.png', () => {
        option1Button.innerText = 'A) Não, e nem estou afim de aprender.';
        option1Button.onclick = () => {
            choices.push('A');
            MateusSala();
        };
        option2Button.style.display = 'inline';
        option2Button.innerText = 'B) Mais ou menos, alguns acordes de violão.';
        option2Button.onclick = () => {
            choices.push('B');
            MateusSala();
        };
        option3Button.style.display = 'inline';
        option3Button.innerText = 'C) Algum? Sei tocar vários: guitarra, baixo, bateria, prato, pandeiro e muitos mais.';
        option3Button.onclick = () => {
            choices.push('C');
            MateusSala();
        };
    });
}


function MateusSala() {
    buttonAudio.play();
    drawImage('IMG/MateusEncontroSala.png', () => {
        option1Button.innerText = 'A) Eu fico estudando o tempo inteiro, e no tempo livre vou para academia, relaxar a mente.';
        option1Button.onclick = () => {
            choices.push('A');
            FinalJogo();
        };
        option2Button.style.display = 'inline';
        option2Button.innerText = 'B) Eu amo ficar lendo, escrevendo, e assistindo filmes com minha amiga Marina.';
        option2Button.onclick = () => {
            choices.push('B');
            FinalJogo();
        };
        option3Button.style.display = 'inline';
        option3Button.innerText = 'C) Gosto de ficar tocando, ouvindo músicas, tenho uma banda de rock, tocamos todo sábado no parque.';
        option3Button.onclick = () => {
            choices.push('C');
            FinalJogo();
        };
    });
}


function FinalJogo() {
    const finalScene = determineFinalScene();
    if (finalScene === 'FinalA') {
        FinalA();
    } else if (finalScene === 'FinalB') {
        FinalB();
    } else if (finalScene === 'FinalC') {
        FinalC();
    } else {
        Empate();
    }
}

function determineFinalScene() {
    // Exemplo de lógica para determinar o final do jogo com base nas escolhas
    let countA = choices.filter(choice => choice === 'A').length;
    let countB = choices.filter(choice => choice === 'B').length;
    let countC = choices.filter(choice => choice === 'C').length;

    if (countA > countB && countA > countC) {
        return 'FinalA'; // Final baseado na maioria das escolhas A
    } else if (countB > countA && countB > countC) {
        return 'FinalB'; // Final baseado na maioria das escolhas B
    } else if (countC > countA && countC > countB) {
        return 'FinalC'; // Final baseado na maioria das escolhas C
    } else if (countA === countB && countB === countC)
        return 'Empate'; // Caso de empate entre as escolhas
    }

function FinalA() {
    audio.pause();
    audio4.play();
    buttonAudio.play();
    drawImage('IMG/FinalA1.png', () => {
        option1Button.innerText = 'Pode sim';
        option1Button.onclick = FinalA2;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function FinalA2() {
    buttonAudio.play();
    drawImage('IMG/FinalA2.png', () => {
        option1Button.innerText = 'Eu acho ótimo ';
        option1Button.onclick = FinalDoEpisodio;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function FinalC() {
    audio.pause();
    audio4.play();
    buttonAudio.play();
    drawImage('IMG/FinalB1.png', () => {
        option1Button.innerText = 'Pode sim';
        option1Button.onclick = FinalC2;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function FinalC2() {
    buttonAudio.play();
    drawImage('IMG/FinalB2.png', () => {
        option1Button.innerText = 'Eu acho ótimo ';
        option1Button.onclick = FinalDoEpisodio;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function FinalB() {
    audio.pause();
    audio4.play();
    buttonAudio.play();
    drawImage('IMG/FinalC1.png', () => {
        option1Button.innerText = 'Pode sim';
        option1Button.onclick = FinalB2;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function FinalB2() {
    buttonAudio.play();
    drawImage('IMG/FinalC2.png', () => {
        option1Button.innerText = 'Eu acho ótimo ';
        option1Button.onclick = FinalDoEpisodio;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function Empate() {
    buttonAudio.play();
    drawImage('IMG/Empate1.png', () => {
        option1Button.innerText = 'Pode sim';
        option1Button.onclick = Empate2;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function Empate2() {
    buttonAudio.play();
    drawImage('IMG/Empate2.png', () => {
        option1Button.innerText = 'Eu acho ótimo ';
        option1Button.onclick = FinalDoEpisodio;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

function FinalDoEpisodio() {
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    buttonAudio.play(); 
    drawImage('IMG/FimEpisodio.png', () => {
        option1Button.innerText = 'Recomeçar ';
        option1Button.onclick = startGame;
        option2Button.style.display = 'none';
        option3Button.style.display = 'none';
    });
}

startGame();