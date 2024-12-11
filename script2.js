
        const fly = document.getElementById("fly");
        let fixedAngle = -30; // Ângulo fixo para ajustar à inclinação do PNG

        document.addEventListener("mousemove", (event) => {
            const flyRect = fly.getBoundingClientRect();
            const flyX = flyRect.left + flyRect.width / 2;
            const flyY = flyRect.top + flyRect.height / 2;

            const deltaX = event.clientX - flyX;
            const deltaY = event.clientY - flyY;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Ângulo em graus

            fly.style.left = `${event.clientX - flyRect.width / 2}px`;
            fly.style.top = `${event.clientY - flyRect.height / 2}px`;
            fly.style.transform = `rotate(${angle + fixedAngle}deg)`; // Inclui o ajuste de 30 graus
        });
