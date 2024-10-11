document.addEventListener('DOMContentLoaded', () => {
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

    // FUNÇÃO BOTÕES CAMISAS E TÊNIS
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
        let quantidadeTotal = 0; // Total de itens no carrinho
        let quantidadeDoItem = 1; // Quantidade do item atual (sempre inicia com 1)

        let imgItem = document.querySelector('.img-produto > img').src;
        let preco = document.querySelector('.preco > p').innerHTML;
        let tipoProduto = '';
        

        function showModal() {
            // Fecha o modal de perfil se estiver aberto
            if (!modal_perfil.classList.contains('hidden')) {
                modal_perfil.classList.add('hidden');
            }
            // Alterna a visibilidade do modal do carrinho
            modal_carrinho.classList.toggle('hidden');
        }

        function showModalPerfil() {
            // Fecha o modal do carrinho se estiver aberto
            if (!modal_carrinho.classList.contains('hidden')) {
                modal_carrinho.classList.add('hidden');
            }
            // Alterna a visibilidade do modal de perfil
            modal_perfil.classList.toggle('hidden');
        }

        function adicionarItenCarrinho() {
            imgItem = document.querySelector('.img-produto > img').src;
            preco = document.querySelector('.preco > p').innerHTML;

            // Define o tipo de produto
            tipoProduto = btnAddCarrinho.getAttribute('data-type');

            // Incrementa apenas 1 no total de itens
            quantidadeTotal += 1;

            // Se o carrinho já possui itens, apenas atualiza o modal
            if (document.querySelector('.item-carrinho')) {
                atualizarQuantidadeEValor(); // Atualiza a quantidade e o valor
            } else {
                
                // Adiciona o item ao modal
                modal_carrinho.innerHTML = `
                    <div class="item-carrinho">
                        <div class="img-item">
                            <img src="${imgItem}" alt="">
                        </div>
                        <div class="quantidade titulo cor-0 medio">
                            <button class="diminuir">-</button>
                            <span id="numeroQtd">${quantidadeDoItem}</span>
                            <button class="aumentar">+</button>
                        </div>
                        <div class="precoUnitario">
                            <div id="precoTotal" class="titulo cor-0 medio">${preco}</div>
                        </div>
                    </div>
                    <button class="botao-prosseguir">Prosseguir</button>
                `;

               
                adicionaEventoQuantidade();

               
                adicionarEventoBotaoProsseguir();
            }

            // Atualiza a quantidade e valor total
            atualizarQuantidadeEValor();

            // SALVANDO NA MEMÓRIA PARA USAR NA PÁGINA FINAL
            localStorage.setItem('quantidadeTotal', quantidadeTotal);
            const precoProduto = (tipoProduto === 'camisa') ? precoUnitarioCamisa : precoUnitarioTenis;
            const novoTotal = quantidadeTotal * precoProduto;
            localStorage.setItem('precoTotal', novoTotal.toFixed(2).replace('.', ','));

           
            localStorage.setItem('produtoImagem', imgItem);
            localStorage.setItem('produtoTipo', tipoProduto);
            localStorage.setItem('produtoPreco', precoProduto);
        }

      

        function atualizarQuantidadeEValor() {
            const numeroQtd = document.getElementById('numeroQtd');
            const precoProduto = (tipoProduto === 'camisa') ? precoUnitarioCamisa : precoUnitarioTenis;

            // Atualiza a quantidade na caixa e o valor total
            numeroQtd.innerHTML = quantidadeTotal; 
            const novoTotal = quantidadeTotal * precoProduto;
            document.getElementById('precoTotal').innerHTML = `R$ ${novoTotal.toFixed(2).replace('.', ',')}`;

            // Atualiza o número total de itens no carrinho
            quantidadeCarrinho.innerHTML = quantidadeTotal; 
        }


         // função  SOMA e DIMINUI QUANTO ITENS TEM
        function acrescentaItens() {
            quantidadeTotal++; 
            atualizarQuantidadeEValor();
        }

        function retiraItens() {
            if (quantidadeTotal > 1) {
                quantidadeTotal--; 
                atualizarQuantidadeEValor();
            } else {
                quantidadeTotal = 0; 
                carrinhoVazio();
            }
        }

        function carrinhoVazio() {
            quantidadeCarrinho.innerHTML = 0; 
            modal_carrinho.innerHTML = `<h1 class="titulo cor-3">Carrinho está vazio</h1>`;
        }

        function adicionaEventoQuantidade() {
            const acrescentarItem = document.querySelector('.item-carrinho .aumentar');
            const retirarItem = document.querySelector('.item-carrinho .diminuir');

            acrescentarItem.addEventListener('click', () => {
                acrescentaItens();
            });

            retirarItem.addEventListener('click', () => {
                retiraItens();
            });
        }

         //função para CLICAR EM PROSSEGUIR E CONTINUAR 

        function adicionarEventoBotaoProsseguir() {
            const botaoProsseguir = document.querySelector('.botao-prosseguir');
            if (botaoProsseguir) {
                botaoProsseguir.addEventListener('click', () => {
                    
                    localStorage.setItem('quantidadeCarrinho', quantidadeTotal);

                    
                    alert('Redirecionando para a página de pagamento...');
                    window.location.href = 'checkout.html'; 
                });
            }
        }

       
        if (bodyDetalhes) {
            btnAddCarrinho.addEventListener('click', adicionarItenCarrinho);
            icone_carrinho.addEventListener('click', showModal);
            icone_perfil.addEventListener('click', showModalPerfil);
        }
    }
});


