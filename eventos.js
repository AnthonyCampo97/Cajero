var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var estado = 0; //estado del Click
var colorLinea = "green"; //Color de la linea
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 299,
    y = 299;


//console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("mousedown", presionarMouse); //Cuando se presiona el Mouse
document.addEventListener("mouseup", soltarMouse); //Cuando se Suelta el mouse
document.addEventListener("mousemove", dibujarMouse); //Cuando se mueve el mouse


dibujarLinea("green", 599, 599, 601, 601, papel); //Punto de partida
//Linea del Borde
dibujarLinea("blue", 0, 0, 600, 0, papel);
dibujarLinea("blue", 600, 0, 600, 600, papel);
dibujarLinea("blue", 600, 600, 0, 600, papel);
dibujarLinea("blue", 0, 600, 0, 0, papel);
//Fin borde

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//Funciones Para Dibujar con teclado
function dibujarTeclado(evento) {
    console.log(evento.keyCode);
    var colorcito = "red";
    var movimiento = 10;
    switch (evento.keyCode) {
        case teclas.DOWN:
            console.log("Vamos Abajo");
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("Vamos Arriba");
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            console.log("Vamos Izquiera");
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("Vamos a Derecha");
            break;
        default:
            console.log("Otra tecla");

    }

    if (evento.keyCode == teclas.UP) {
        console.log("Vamos Arriba");
    }
    if (evento.keyCode == teclas.DOWN) {
        console.log("Vamos Abajo");
    }
    if (evento.keyCode == teclas.LEFT) {
        console.log("Vamos Izquiera");
    }
    if (evento.keyCode == teclas.RIGHT) {
        console.log("Vamos a Derecha");
    }
} //Fin funciones teclado


//Inicio Funciones dibujo con Mouse
function dibujarMouse(evento) {
    if (estado == 1) { //se dibuja estando el mouse presionado
        dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);

    }
    x = evento.layerX;
    y = evento.layerY;
    console.log(evento);
}

function presionarMouse(evento) { // funcion para MouseDown
    estado = 1; //Click presionado
    x = evento.layerX;
    y = evento.layerY;

}

function soltarMouse(evento) { //Click Suelto
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
} //Final funciones mouse