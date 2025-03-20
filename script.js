document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para os links de navegação
    document.querySelectorAll('header a, .btn-scroll').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animação ao scrollar
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .tecnica-item, .secao h2, .flex-container').forEach(element => {
        element.classList.add('animacao');
        observador.observe(element);
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

    // Adicionar classe "active" ao item de menu atual
    function setActiveMenu() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveMenu);

    // Adicionar estilos CSS dinamicamente para animações
    const style = document.createElement('style');
    style.textContent = `
        .animacao {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .visivel {
            opacity: 1;
            transform: translateY(0);
        }
        
        nav a.active {
            color: #f0c14b !important;
            position: relative;
        }
        
        nav a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #f0c14b;
        }
    `;
    document.head.appendChild(style);
});