const bodyDetalhes = document.querySelector('body#detalhes');
if (bodyDetalhes) {
  const quantidadeCarrinho = document.getElementById('numero');
  const btnAddCarrinho = document.querySelector('.addCarrinho');
  const modal_carrinho = document.querySelector('.modal-carrinho');
  const modal_perfil = document.querySelector('.modal-perfil');
  const icone_carrinho = document.querySelector('#carrinho img');
  const icone_perfil = document.querySelector('.bg-perfil');
  let quantidade = 0;
  let quantidadeDoItem = 1;
  let imgItem = document.querySelector('.img-produto > img').src;
  let preco = document.querySelector('.preco > p').innerHTML;

  carrinhoVazio();
  let itemCarrinho = `
                     <div class="item-carrinho">
              <div class="img-item">
                <img src="${imgItem}" alt="">
              </div>
              <div class="quantidade titulo cor-0 medio ">
                <span class="diminuir">
                  <img src="./imgs/minus.svg" alt="">
                </span>
                <span id="numeroQtd">${quantidadeDoItem}</span>
                <span class="aumentar">
                  <img src="./imgs/plus.svg" alt="">
                </span>
              </div>
              <div class="precoUnitario">
                <div id="precoTotal" class="titulo cor-0 medio">${preco}</div>
              </div>
            </div>
`;

  function showModal() {
    if (!modal_perfil.classList.contains('hidden')) {
      modal_perfil.classList.add('hidden');
    }
    modal_carrinho.classList.toggle('hidden');
  }

  function showModalPerfil() {
    if (!modal_carrinho.classList.contains('hidden')) {
      modal_carrinho.classList.add('hidden');
    }

    modal_perfil.classList.toggle('hidden');
  }

  function adicionarItenCarrinho() {
    imgItem = document.querySelector('.img-produto > img').src;
    preco = document.querySelector('.preco > p').innerHTML;
    quantidade++;
    modal_carrinho.innerHTML = '';
    modal_carrinho.innerHTML += itemCarrinho;
    quantidadeCarrinho.innerHTML = quantidade;
    adicionaEventoQuantidade();
  }
  if (bodyDetalhes) {
    btnAddCarrinho.addEventListener('click', adicionarItenCarrinho);
    icone_carrinho.addEventListener('click', showModal);
    icone_perfil.addEventListener('click', showModalPerfil);
  }

  function carrinhoVazio() {
    quantidadeCarrinho.innerHTML = 0;
    modal_carrinho.innerHTML = `<h1 class=" titulo cor-3">Carrinho está vazio</h1>`;
  }

  function acrescentaItens() {
    const numeroQtd = document.getElementById('numeroQtd');
    quantidadeDoItem++;
    numeroQtd.innerHTML = quantidadeDoItem;
    atualizarTotal(quantidadeDoItem);
  }

  function retiraItens() {
    const numeroQtd = document.getElementById('numeroQtd');
    quantidadeDoItem--;
    if (quantidadeDoItem >= 1) {
      numeroQtd.innerHTML = quantidadeDoItem;
      atualizarTotal(quantidadeDoItem);
    } else {
      quantidade = 0;
      quantidadeDoItem = 0;
      quantidadeCarrinho.innerHTML = quantidadeDoItem;
      carrinhoVazio();
    }
  }

  function atualizarTotal(valor) {
    const totalItem = document.getElementById('precoTotal');
    totalItem.innerHTML = `R$${valor * 508},00`;
  }

  function adicionaEventoQuantidade() {
    const acrescentarItem = document.querySelector('.item-carrinho .aumentar');
    const retirarItem = document.querySelector('.item-carrinho .diminuir');
    acrescentarItem.addEventListener('click', acrescentaItens);
    retirarItem.addEventListener('click', retiraItens);
  }
}

// Para alternar a seleção dos botões de tamanho das camisas
const tamanhoBtns = document.querySelectorAll('.tamanho-btn');

tamanhoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active'); 
    } else {
      tamanhoBtns.forEach(b => b.classList.remove('active')); s
      btn.classList.add('active');  
    }
  });
});


document.querySelectorAll('.tamanho-btn-tenis').forEach(button => {
  button.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active'); 
    } else {
      document.querySelectorAll('.tamanho-btn-tenis').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active'); 
    }
  });
});

const tamanhoBotoes = document.querySelectorAll('.tamanho-btn');



tamanhoBotoes.forEach((botao) => {
  botao.addEventListener('click', function () {
    
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
     
      tamanhoBotoes.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
    }
  });
});
