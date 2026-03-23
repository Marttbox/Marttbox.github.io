document.addEventListener("DOMContentLoaded", () => {

const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagenGrande");

document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imagenGrande.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

});
