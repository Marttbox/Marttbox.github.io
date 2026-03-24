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

            .flecha{
position:absolute;
top:50%;
transform:translateY(-50%);
font-size:40px;
color:white;
cursor:pointer;
padding:10px;
user-select:none;
}

.izquierda{ left:20px; }
.derecha{ right:20px; }
        }
    }
});

});
