'use strict';
function cogerElementosById(identificador) {

    var nodo = document.getElementById(identificador).firstChild;
    alert("Tipo: " + nodo.nodeType);
    alert("Nombre: " + nodo.nodeName);
    alert("Valor: " + nodo.nodeValue);
}
function  cogerElementosbyTagName(tipo, numero) {

    var nodo = document.getElementsByTagName(tipo)[numero];
    alert("Tipo: " + nodo.nodeType);
    alert("Nombre: " + nodo.nodeName);
    alert("Valor: " + nodo.nodeValue);
}
function nuevoElemento() {
    var texto = prompt("TEXTO: ");
    var obj_texto = document.createTextNode(texto);
    var obj_p = document.createElement("p");
    obj_p.appendChild(obj_texto);
    document.body.appendChild(obj_p);
}

function crearImagen() {

    var x = document.createElement("IMG");
    x.setAttribute("src", "batman.png");

    document.body.appendChild(x);

}
function borrarImagen() {
    var imagen = document.getElementsByTagName("img")[2 - 1];
    var x = document.removeChild(imagen);
}

function crearTabla() {
    var nFilas = parseInt(prompt("Nº de filas: "));
    var nColumnas = parseInt(prompt("Nº columnas:"));
    var texto = prompt("TEXTO: ");
    var obj_texto = document.createTextNode(texto);
    var obj_table = document.createElement("table");
    var obj_thead = document.createElement("thead");
    var obj_tbody = document.createElement("tbody");
    //var obj_tr = document.createElement("tr");
    var obj_th = document.createElement("th");

    var obj_td = document.createElement("td");



    for (var i = 0; i < nFilas; i++) {
        var fila = document.createElement('tr');
//       

        for (var j = 0; j < nColumnas; j++) {
            var celda = document.createElement('td');
            var texto2 = document.createTextNode(texto);
            
            alert('segundo for');
            
            celda.appendChild(texto2);
            fila.appendChild(celda);
        }
        obj_table.appendChild(fila);

    }
    
    document.body.appendChild(obj_table);

}
function crearTabla2() {
    var nFilas = parseInt(prompt("Nº de filas: "));
    var nColumnas = parseInt(prompt("Nº columnas:"));
    var texto = prompt("TEXTO: ");
    var obj_texto = document.createTextNode(texto);
    var obj_table = document.createElement("table");
    var x;
    for (var i = 0; i < nFilas; i++) {

        if (i === 0) {
            var obj_thead = document.createElement("thead");



            var obj_tr = document.createElement("tr");
            var obj_th = document.createElement("th");


            var texto2 = document.createTextNode(texto);
            obj_th.appendChild(texto2);
            x = obj_tr.appendChild(obj_th);
            

        } else {

            var obj_tbody = document.createElement("tbody");
            var obj_tr = document.createElement("tr");


        }

        for (var j = 0; j < nColumnas; j++) {
            obj_thead.appendChild(obj_tr);
        }
        obj_table.appendChild(x);
    }

    document.body.appendChild(obj_table);
}