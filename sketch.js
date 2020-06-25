// Chamado apenas uma vez antes do jogo começar

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(40);
  somDoJogo.loop();

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  
  jogo.setup();
  cenas = {
    jogo,
    telaInicial 
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

// O draw serve para ver a animação acontecendo

function draw() {
  cenas[cenaAtual].draw();
}