document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los títulos y contenidos
    var titles = document.querySelectorAll(".div__title");

    // Iterar sobre cada título y agregar evento clic y lógica de despliegue/ocultación
    titles.forEach(function(title) {
        title.addEventListener("click", function() {
            // Obtener el contenido asociado al título clickeado
            var content = this.nextElementSibling;

            // Añadir o remover la clase de animación para mostrar u ocultar el contenido
            content.classList.toggle("show-animation");
        });
    });
});

window.onscroll = function() {
    if(document.documentElement.scrollTop > 100) {
        document.querySelector(".go-top-container").classList.add("show");
    } else {
        document.querySelector(".go-top-container").classList.remove("show");
    }
}

document.querySelector(".go-top-container").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});