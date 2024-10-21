document.querySelector('.bnt-entrar a').addEventListener('click', function(event) {
    event.preventDefault(); 

    
    
   
    localStorage.setItem('loggedIn', 'true'); // VER SE USUÁRIO ESTÁ LOGADO
    window.location.href = './index.html'; // volta pra página inicial
});
