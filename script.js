
  window.loadContent = function(pageName) {
      fetch(pageName)
          .then(response => response.text())
          .then(data => {
              document.getElementById('content').innerHTML = data;

          })
          .catch(error => console.error('Error loading the page: ', error));
  };
  document.addEventListener('DOMContentLoaded', () => {
      loadContent('about.html');
  });