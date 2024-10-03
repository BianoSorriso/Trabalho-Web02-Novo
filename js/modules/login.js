document.querySelector('.bnt-entrar a').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    // Aqui você pode adicionar a lógica para verificar as credenciais do usuário.
    
    // Simulando um login bem-sucedido
    localStorage.setItem('loggedIn', 'true'); // Define que o usuário está logado
    window.location.href = './index.html'; // Redireciona para o index
});
