document.addEventListener("DOMContentLoaded", () => {

const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagenGrande");
const imagenes = document.querySelectorAll(".item img");

let index = 0;

// Abrir imagen
imagenes.forEach((img, i) => {
    img.addEventListener("click", () => {
        index = i;
        mostrarImagen();
    });
});

function mostrarImagen(){
    lightbox.style.display = "flex";
    imagenGrande.src = imagenes[index].src;

    setTimeout(() => {
        lightbox.classList.add("active");
    }, 10);
}

// Cerrar al hacer click
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");

    setTimeout(() => {
        lightbox.style.display = "none";
    }, 300);
});

// Teclas
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {

        if (e.key === "Escape") {
            lightbox.classList.remove("active");
            setTimeout(() => {
                lightbox.style.display = "none";
            }, 300);
        }

        if (e.key === "ArrowRight") {
            index = (index + 1) % imagenes.length;
            mostrarImagen();
        }

        if (e.key === "ArrowLeft") {
            index = (index - 1 + imagenes.length) % imagenes.length;
            mostrarImagen();

            document.querySelector(".izquierda").addEventListener("click", () => {
    index = (index - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
});

document.querySelector(".derecha").addEventListener("click", () => {
    index = (index + 1) % imagenes.length;
    mostrarImagen();
});
            let startX = 0;

lightbox.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) {
        index = (index - 1 + imagenes.length) % imagenes.length;
        mostrarImagen();
    }

    if (startX - endX > 50) {
        index = (index + 1) % imagenes.length;
        mostrarImagen();
    }
});
        }
    }
});

});
