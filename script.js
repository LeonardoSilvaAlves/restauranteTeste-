document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Exemplo de validação e alerta
    alert('Obrigado por entrar em contato, ' + document.getElementById('name').value + '!');

    // Limpa o formulário após o envio
    document.getElementById('contact-form').reset();
});
