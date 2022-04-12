var carta1 = {
  nome: "Sonic",
  imagem: "./imagens/Sonic.png",
  atributos: {
    ataque: 9,
    inteligência: 7,
    velocidade: 10
  }
};

var carta2 = {
  nome: "Tails",
  imagem: "./imagens/Tails.png",
  atributos: {
    ataque: 7,
    inteligência: 10,
    velocidade: 7
  }
};

var carta3 = {
  nome: "Knucles",
  imagem: "./imagens/Knuckles.png",
  atributos: {
    ataque: 10,
    inteligência: 7,
    velocidade: 7
  }
};

var carta4 = {
  nome: "Amy Rose",
  imagem: "./imagens/Emy.jpg",
  atributos: {
    ataque: 7,
    inteligência: 8,
    velocidade: 6
  }
};

var carta5 = {
  nome: "Doutor Eggman",
  imagem: "./imagens/Eggman.jpg",
  atributos: {
    ataque: 8,
    inteligência: 9,
    velocidade: 8
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];

var cartaPc;
var cartaJogador;

function sortearCarta() {
  var numeroCartaPc = parseInt(Math.random() * 5);
  cartaPc = cartas[numeroCartaPc];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaPc == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaPc = cartaPc.atributos[atributoSelecionado];

  var divResultado = document.getElementById("resultado");

  if (valorCartaJogador > valorCartaPc) {
    divResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>";
  } else if (valorCartaPc > valorCartaJogador) {
    divResultado.innerHTML = "<p class='resultado-final'>Você perdeu.</p>";
  } else {
    divResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
  }
  exibirCartaPc();
  // document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem +")";
  
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var tagHtmlOpcoes = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  divCartaJogador.innerHTML =
    moldura + nome + tagHtmlOpcoes + opcoesTexto + "</div>";
}

function exibirCartaPc() {
  var divCartaPc = document.getElementById("carta-pc");
  divCartaPc.style.backgroundImage = `url(${cartaPc.imagem})`;
  //divCartaMaquina.style.backgroundImage = "url(" + cartaPc.imagem +")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle">${cartaPc.nome}</p>`;
  var tagHtmlOpcoes = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaPc.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaPc.atributos[atributo] +
      "</p>";
  }

  divCartaPc.innerHTML =
    moldura + nome + tagHtmlOpcoes + opcoesTexto + "</div>";
}
