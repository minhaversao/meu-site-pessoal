document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para os links de navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Manipulador do formulário de contato
    const formularioContato = document.getElementById('formulario-contato');
    if (formularioContato) {
        formularioContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Aqui você normalmente enviaria os dados para um servidor
            // Como este é um exemplo, apenas exibimos uma mensagem de sucesso
            alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso.`);
            this.reset();
        });
    }

    // Animação simples para os cards
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        observador.observe(card);
    });
});