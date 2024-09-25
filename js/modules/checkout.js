// Captura o evento de clique no botão "Finalizar Pedido"
document.getElementById('place-order').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão

    // Debug: log para confirmar que o botão foi clicado
    console.log("Botão 'Finalizar Pedido' clicado.");

    // Redireciona diretamente para a página de sucesso
    window.location.href = 'success.html'; // Altere para o nome da sua página de teste, se necessário
});
