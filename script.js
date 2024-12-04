// Função para carregar conteúdo dinamicamente
window.loadContent = function (pageName) {
    return fetch(pageName)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load page: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('content').innerHTML = data; // Insere o conteúdo carregado
      })
      .catch(error => console.error('Error loading the page: ', error));
  };
  
  // Adiciona eventos de clique nos links do menu
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.navbar-menu-link'); // Seleciona todos os botões do menu
  
    // Itera pelos botões e adiciona o evento de clique
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault(); // Evita comportamento padrão do link
  
        const pageName = button.getAttribute('data-page'); // Obtém o nome da página do atributo data-page
  
        if (pageName) {
          // Carrega o conteúdo associado ao botão clicado
          loadContent(pageName)
            .then(() => {
              // Remove a classe "selected" de todos os botões
              buttons.forEach(btn => btn.classList.remove('selected'));
  
              // Adiciona a classe "selected" ao botão clicado
              button.classList.add('selected');
            })
            .catch(error => console.error('Failed to load content: ', error));
        }
      });
    });
  
    // Carrega o conteúdo inicial (opcional)
    const defaultPage = 'about.html'; // Página inicial padrão
    loadContent(defaultPage)
      .then(() => {
        console.log(`Default content (${defaultPage}) loaded.`);
      })
      .catch(error => console.error('Error loading default content:', error));
  });
  