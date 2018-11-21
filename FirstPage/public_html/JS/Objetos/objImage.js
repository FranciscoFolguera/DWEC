


function batmanImage() {
    document.images["imagen"].src = "imagenes/batman.png";
}
function jokerImage(imgId) {
    document.images["imagen"].src = "imagenes/joker.png";
}


function cambiarTamaño() {
    var alto = document.images["imagen"].heigth;
    var ancho = document.images["imagen"].width;



    document.images["imagen"].heigth = alto += 4;
    document.images["imagen"].width = ancho += 4;
    


}
