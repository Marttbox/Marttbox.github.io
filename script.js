document.addEventListener("DOMContentLoaded", () => {
    img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    setTimeout(() => {
        lightbox.classList.add("active");
    }, 10);
    imagenGrande.src = img.src;

        document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
        lightbox.classList.remove("active");
    }
});
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 300);
});

const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagenGrande");

document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imagenGrande.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    
