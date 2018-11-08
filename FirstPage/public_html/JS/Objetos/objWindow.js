/*var myWindow="index.html";
 
 //Abre la ventana con la direccion de myWindow
 function openWin() {
 myWindow = window.open("hija.html", "_blank", "width=500, height=500");
 
 }
 //Cierra la ventana con la direccion de myWindow
 function closeWin() {
 myWindow.close();
 }
 //Cierra la ventana en la que estes
 function cerrarVentana(){
 
 window.close();
 }
 
 for (const prop in window) {
 document.write(prop);
 }
 
 function disminuirVentana(){
 
 
 window.innerWidth();
 window.innerHeight();
 
 }
 document.write("<br>"+screen.width);
 document.write("<br>"+screen.height);
 document.write("<br>"+location.hostname);
 //document.write("<br>Href:"+ 
 
 //  location.href="https://www.comuniazo.com/comunio/jugadores/godin");
 document.write("<br>Hash:"+location.hash);
 document.write("<br>Pathname:"+location.pathname);
 document.write("<br>Port:"+location.port);
 document.write("<br>Protocol:"+location.protocol);
 document.write("<br>Search:"+location.search);
 
 */
var agenda = new Array(12);

for (var i = 0; i < agenda.length; i++) {

    agenda[i] = new Array(31);
    for (var j = 0; j < agenda[i].length; j++) {
        agenda[i][j] = new Array(24);
        
    }
}

for (var i = 0; i < agenda.length; i++) {

    //agenda[i] = new Array(31);
    for (var j = 0; j < agenda[i].length; j++) {
        //agenda[i][j] = new Array(24);
        for (var k = 0; k < agenda[i][j].length; k++) {
             if (agenda[i][j] === agenda[7][17]) {
                agenda[i][j][k]="Es mi cumple";
                document.write("ADIOS" + [k] + "<br>");
                document.write(agenda[i][j][k]);
            }else{
             agenda[i][j][k]="No hay nada";
              //  document.write("HOLA" + [k] + "<br>");
                //document.write(agenda[i][j][k]);
            }
        }
    }
}
