const emailInput = document.getElementById('email');
const envelopeIcon = document.getElementById('envelope-icon');

emailInput.addEventListener('focus', () => {
    envelopeIcon.classList.add('hidden'); // Esconde o ícone quando o campo é focado
});

emailInput.addEventListener('blur', () => {
    if (emailInput.value === '') {
        envelopeIcon.classList.remove('hidden'); // Mostra o ícone se o campo estiver vazio
    }
});
