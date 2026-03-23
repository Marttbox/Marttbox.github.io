const galeria = document.getElementById("galeria");
const items = Array.from(galeria.children);
items.reverse().forEach(item => galeria.appendChild(item));

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
