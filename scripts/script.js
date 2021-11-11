let numProdutosSelecionados = 0;
let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";
let precoPrato = null;
let precoBebida = null;
let precoSobremesa = null;
let precoTotal = null;

function validarPedido() {
  //ver se tenho 3 opções selecionadas
  const pratoValidado = document.querySelector(".pratos .selecionado");
  const bebidaValidada = document.querySelector(".bebidas .selecionado");
  const sobremesaValidada = document.querySelector(".sobremesas .selecionado");

  const botaoPedido = document.querySelector(".botao");

  if (numProdutosSelecionados == 3) {
    botaoPedido.classList.add("validado");
    botaoPedido.innerHTML = "Fechar pedido";
  }
}

function selecionarPrato(produto, prato, precoDoPrato) {
  //ja tem alguem selecionado?
  const pratoSelecionado = document.querySelector(".pratos .selecionado");

  //se ja tiver, tirar a classe "selecionado"
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("selecionado");
  } else {
    numProdutosSelecionados++;
  }

  //colocar a classe "selecionado"
  produto.classList.add("selecionado");

  validarPedido();
  nomePrato = prato;
  precoPrato = precoDoPrato;
}

function selecionarBebida(produto, bebida, precoDaBebida) {
  //ja tem alguem selecionado?
  const bebidaSelecionada = document.querySelector(".bebidas .selecionado");

  //se ja tiver, tirar a classe "selecionado"
  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("selecionado");
  } else {
    numProdutosSelecionados++;
  }

  //colocar a classe "selecionado"
  produto.classList.add("selecionado");

  validarPedido();
  nomeBebida = bebida;
  precoBebida = precoDaBebida;
}

function selecionarSobremesa(produto, sobremesa, precoDaSobremesa) {
  //ja tem alguem selecionado?
  const sobremesaSelecionada = document.querySelector(
    ".sobremesas .selecionado"
  );

  //se ja tiver, tirar a classe "selecionado"
  if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("selecionado");
  } else {
    numProdutosSelecionados++;
  }

  //colocar a classe "selecionado"
  produto.classList.add("selecionado");

  validarPedido();
  nomeSobremesa = sobremesa;
  precoSobremesa = precoDaSobremesa;
}

function confirmarPedido() {
  const pratoPedido = document.querySelector(".confirmar-nome-prato");
  pratoPedido.innerHTML = `${nomePrato}`;
  const precoPratoPedido = document.querySelector(".confirmar-preco-prato");
  precoPratoPedido.innerHTML = `${precoPrato}`;

  const bebidaPedida = document.querySelector(".confirmar-nome-bebida");
  bebidaPedida.innerHTML = `${nomeBebida}`;
  const precoBebidaPedida = document.querySelector(".confirmar-preco-bebida");
  precoBebidaPedida.innerHTML = `${precoBebida}`;

  const sobremesaPedida = document.querySelector(".confirmar-nome-sobremesa");
  sobremesaPedida.innerHTML = `${nomeSobremesa}`;
  const precoSobremesaPedida = document.querySelector(
    ".confirmar-preco-sobremesa"
  );
  precoSobremesaPedida.innerHTML = `${precoSobremesa}`;

  precoTotal = precoPrato + precoBebida + precoSobremesa;
  const precoTotalPedido = document.querySelector(".confirmar-preco-total");
  precoTotalPedido.innerHTML = `R$ ${precoTotal.toFixed(2)}`;
  const telaConfirmarDados = document.querySelector(".tela-confirmar-dados");
  telaConfirmarDados.classList.remove("sumir");
  telaConfirmarDados.classList.add("aparecer");
}

function enviarPedido() {
  let nomeCliente = prompt(
    `Felizes em podermos te servir. Como deseja que te chamemos?`
  );

  let enderecoCliente = prompt(`Última pergunta e já vamos preparar o seu pedido e enviá-lo! 
  Qual o endereço que deseja receber o pedido?`);

  precoTotal = precoTotal.toFixed(2);

  let mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${nomePrato}
  - Bebida: ${nomeBebida}
  - Sobremesa: ${nomeSobremesa}
  Total: R$ ${precoTotal}
  
  Nome: ${nomeCliente}
  Endereço: ${enderecoCliente}`;
  mensagem = encodeURIComponent(mensagem);

  const numeroRestaurante = 5519989581292;

  const urlWpp = `https://wa.me/${numeroRestaurante}?text=${mensagem}`;
  window.open(urlWpp);
}

function cancelarPedido() {
  const telaConfirmarDados = document.querySelector(".tela-confirmar-dados");
  telaConfirmarDados.classList.add("sumir");
}

