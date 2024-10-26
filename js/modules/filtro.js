const btn_filtro = document.querySelectorAll('.filtro button');
const nomeElementos = document.querySelectorAll('.indice');
const nomeProdutos = document.querySelectorAll('.nomeproduto');
const lupa = document.getElementById('iconePesquisa');
const searchInput = document.querySelector('.search input');
function focusInput() {
  searchInput.focus();
}

lupa.addEventListener('click', focusInput);

function filtroAtivo(event) {
  btn_filtro.forEach((btn) => {
    btn.classList.remove('ativo');
  });
  if (!event.target.classList.contains('ativo')) {
    event.target.classList.add('ativo');
  }

  pegarNomeBottao();
}

btn_filtro.forEach((btn) => {
  btn.addEventListener('click', filtroAtivo);
});

// pegar o nome do bottao que esta selecionado

function pegarNomeBottao() {
  btn_filtro.forEach((btn) => {
    if (btn.classList.contains('ativo')) {
      const nomeBotao = btn.innerHTML.toLowerCase();

      nomeElementos.forEach((elemento) => {
        if (nomeBotao == 'todos') {
          elemento.parentElement.classList.remove('hidden');
          return;
        }
        if (!nomeBotao.includes(elemento.innerHTML.toLowerCase())) {
          elemento.parentElement.classList.add('hidden');
        } else {
          elemento.parentElement.classList.remove('hidden');
        }
      });
    }
  });
}

function pesquisarItem() {
  const texto = this.value.toLowerCase();

   nomeElementos.forEach((elemento) => {
    if (texto != '') {
      if (!elemento.innerHTML.toLowerCase().includes(texto)) {
        elemento.parentElement.classList.add('hidden');
      } else {
        elemento.parentElement.classList.remove('hidden');
      }
    }
  });

  nomeProdutos.forEach((produtos) => {
    if (texto != '') {
      if (!produtos.innerHTML.toLowerCase().includes(texto)) { // SE EU DIGITAR "CACHORRO" não vai aparecer nada, pq não existe esse nome.
       produtos.parentElement.classList.add('hidden');
      } else {
        produtos.parentElement.classList.remove('hidden'); // SE EU DIGITAR O NOME DO PRODUTO CERTO OU PRÓXIMO, ELE VAI APARECER (REMOVE O HIDDEN)
      }
    } else {
      produtos.parentElement.classList.remove('hidden'); // SE EU NÃO DIGITAR NADA, EU REMOVO O HIDDEN E TODOS OS PRODUTOS APARECEM. 
    }
  });
}

searchInput.addEventListener('keyup', pesquisarItem);


