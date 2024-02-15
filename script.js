document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var footer = document.querySelector('footer');

    // Função para verificar se o usuário chegou ao final da página
    function isAtBottom() {
        return window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    }

    // Verifica se é a versão desktop
    if (window.innerWidth >= 768) {
        // Exibe ou ocultar o footer ao rolar
        window.addEventListener('scroll', function () {
            if (isAtBottom()) {
                footer.classList.add('footer-show');
            } else {
                footer.classList.remove('footer-show');
            }

            // Exibe o botão "scrollToTop" quando o usuário rolar para baixo
            if (window.pageYOffset > 20) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
    } else {
        // Na versão mobile, exibir sempre o footer
        footer.classList.add('footer-show');
    }

    // Evento de clique para rolar até o topo da página
    scrollToTopBtn.addEventListener('click', function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.nav-item');

    // Adiciona o evento de clique a cada item do menu
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove a classe 'active' de todos os itens do menu
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });

            // Adiciona a classe 'active' ao item clicado
            item.classList.add('active');
        });
    });
});

// redireciona e recarrega
document.querySelector('.navbar-brand').addEventListener('click', function() {
    window.location.href = '/index.html'; // Redireciona para a página inicial
    // ou
    // location.reload(); // Recarrega a página atual
});