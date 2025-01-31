const eventoClickEmail = () => {
    const iconoEmail = document.getElementById("email");
    const direccionEmail = iconoEmail.getAttribute("data-email");
    let contadorClicks = 0;

    iconoEmail.addEventListener("click", function () {
        contadorClicks++;
        
        navigator.clipboard.writeText(direccionEmail)
            .then(() => {
                iconoEmail.title = "¡Email copiado!";
                const mensajeCopiado = document.createElement("div");
                mensajeCopiado.classList.add("notificacion");
                mensajeCopiado.textContent = "Email copiado al portapapeles";
                document.body.appendChild(mensajeCopiado);
                
                if(contadorClicks == 6) {
                    const gifStopIt = document.createElement("img");
                    gifStopIt.classList.add("stop-it");
                    gifStopIt.src = "https://media.tenor.com/mZZoOtDcouoAAAAM/stop-it-get-some-help.gif";
                    document.body.appendChild(gifStopIt);
                    
                    setTimeout(() => {
                        document.body.removeChild(gifStopIt);
                    }, 2500);
                };
            
                setTimeout(() => {
                    document.body.removeChild(mensajeCopiado);
                    contadorClicks --;
                }, 2000);
            })
            .catch(err => console.error("Error al copiar el email: ", err));
    });      
};