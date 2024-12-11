document.addEventListener("mousemove", (event) => {
    const fly = document.getElementById("fly");

    // Posição atual da mosca
    const flyRect = fly.getBoundingClientRect();
    const flyX = flyRect.left + flyRect.width / 2;
    const flyY = flyRect.top + flyRect.height / 2;

    // Calcula o ângulo entre a mosca e o cursor
    const deltaX = event.clientX - flyX;
    const deltaY = event.clientY - flyY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Actualiza a posição e a rotação da mosca
    fly.style.left = `${event.clientX - flyRect.width / 2}px`;
    fly.style.top = `${event.clientY - flyRect.height / 2}px`;
    fly.style.transform = `rotate(${angle}deg)`;
});
