function abrir(img){
document.getElementById("lightbox").style.display="flex";
document.getElementById("imagenGrande").src=img.src;
}

function cerrar(){
document.getElementById("lightbox").style.display="none";
}