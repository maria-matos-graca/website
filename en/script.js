
window.loadContent = function(pageName) {
    fetch(pageName)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;

        })
        .catch(error => console.error('Error loading the page: ', error));
};

function loadScript(url) {
    var script = document.createElement('script');
    script.src = url + '?v=' + new Date().getTime();
    document.head.appendChild(script);
}

// Load stylesheets with a timestamp to prevent caching
function loadStylesheet(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url + '?v=' + new Date().getTime();
    document.head.appendChild(link);
}

// Load the default content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadScript('script.js');
    loadStylesheet('style.css');
    loadContent('about.html');
});

// Seleciona todos os botões
const buttons = document.querySelectorAll('.select-button');

// Adiciona evento de clique em cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove a classe "selected" de todos os botões
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Adiciona a classe "selected" ao botão clicado
    button.classList.add('selected');
  });
});


