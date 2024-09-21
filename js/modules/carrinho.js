document.addEventListener('DOMContentLoaded', () => {

 
    
  
});



  // FUNÇÃO ALTERAR SELEÇÃO DOS BOTÕES
 
  function alternarSelecaoTamanho(btns) {
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          btns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  }


  
  
  //FUNÇÃO BOTÕES CAMISAS E TÊNIS 



  const tamanhoBtns = document.querySelectorAll('.tamanho-btn');
  alternarSelecaoTamanho(tamanhoBtns);

  const tamanhoBtnsTenis = document.querySelectorAll('.tamanho-btn-tenis');
  alternarSelecaoTamanho(tamanhoBtnsTenis);

  
  
  // FUNÇÕES PARA O CARRINHO

  const bodyDetalhes = document.querySelector('body#detalhes');
  if (bodyDetalhes) {
    const quantidadeCarrinho = document.getElementById('numero');
    const btnAddCarrinho = document.querySelector('.addCarrinho');
    const modal_carrinho = document.querySelector('.modal-carrinho');
    const modal_perfil = document.querySelector('.modal-perfil');
    const icone_carrinho = document.querySelector('#carrinho img');
    const icone_perfil = document.querySelector('.bg-perfil');
    const precoUnitarioCamisa = 508;
    const precoUnitarioTenis = 379;
    let quantidade = 0;
    let quantidadeDoItem = 1;
    let imgItem = document.querySelector('.img-produto > img').src;
    let preco = document.querySelector('.preco > p').innerHTML;
   


    
    
    function showModal() {
      // Fecha o modal de perfil se estiver aberto
      if (!modal_perfil.classList.contains('hidden')) {
        modal_perfil.classList.add('hidden');
      }
      // Alterna a visibilidade do modal do carrinho
      modal_carrinho.classList.toggle('hidden');
      modal_carrinho.style.display = modal_carrinho.classList.contains('hidden') ? 'none' : 'block';
    }

    

    function showModalPerfil() {
      // Fecha o modal do carrinho se estiver aberto
      if (!modal_carrinho.classList.contains('hidden')) {
        modal_carrinho.classList.add('hidden');
      }
      // Alterna a visibilidade do modal de perfil
      modal_perfil.classList.toggle('hidden');
      modal_perfil.style.display = modal_perfil.classList.contains('hidden') ? 'none' : 'block';
    }

    

    function adicionarItenCarrinho() {
      imgItem = document.querySelector('.img-produto > img').src;
      preco = document.querySelector('.preco > p').innerHTML;

      if (quantidadeDoItem === 0) {
        quantidadeDoItem = 1;
      }
      quantidade++;
      
      // Define o tipo de produto
      tipoProduto = btnAddCarrinho.getAttribute('data-type');
    
      modal_carrinho.innerHTML = `
        <div class="item-carrinho">
          <div class="img-item">
            <img src="${imgItem}" alt="">
          </div>

          <div class="quantidade titulo cor-0 medio">
            <span class="diminuir">
              -
            </span>
            <span id="numeroQtd">${quantidadeDoItem}</span>
            <span class="aumentar">
              +
            </span>
          </div>


          
          <div class="precoUnitario">
            <div id="precoTotal" class="titulo cor-0 medio">${preco}</div>
          </div>
        </div>
      `;
              
      
      quantidadeCarrinho.innerHTML = quantidade;
      adicionaEventoQuantidade();
    }

    function carrinhoVazio() {
      quantidadeCarrinho.innerHTML = 0;
      modal_carrinho.innerHTML = `<h1 class="titulo cor-3">Carrinho está vazio</h1>`;
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

    

    function atualizarTotal() {
      // Assegure-se de que tipoProduto esteja definido antes de usá-lo
      const precoProduto = (tipoProduto === "camisa") ? precoUnitarioCamisa : precoUnitarioTenis; 
      const novoTotal = quantidadeDoItem * precoProduto;
    
      // Atualiza o preço total no modal
      document.getElementById('precoTotal').innerHTML = `R$ ${novoTotal.toFixed(2).replace('.', ',')}`;
    }
    
    
    

    function adicionaEventoQuantidade() {
      const acrescentarItem = document.querySelector('.item-carrinho .aumentar');
      const retirarItem = document.querySelector('.item-carrinho .diminuir');
      acrescentarItem.addEventListener('click', acrescentaItens);
      retirarItem.addEventListener('click', retiraItens);
    }

    if (bodyDetalhes) {
      btnAddCarrinho.addEventListener('click', adicionarItenCarrinho);
      icone_carrinho.addEventListener('click', showModal);
      icone_perfil.addEventListener('click', showModalPerfil);
    }
  }




  ////FUNÇÃO ATUALIZAR PREÇO


function atualizaPrecoTotal() {
  atualizarTotal(); // Chame a função para atualizar o total logo após adicionar o item
}

const acrescentarItem = document.querySelector('.item-carrinho .aumentar');
acrescentarItem.style.display = 'inline-block'; // ou 'block'
acrescentarItem.style.visibility = 'visible';

const retirarItem = document.querySelector('.item-carrinho .diminuir');
retirarItem.style.display = 'inline-block'; // ou 'block'
retirarItem.style.visibility = 'visible';







  