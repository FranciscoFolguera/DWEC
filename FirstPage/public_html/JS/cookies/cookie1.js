var salir=0;
var cadena="";
var lista= new Array();
var key;
var valor;
do{
    key=prompt("Introduzca nombre de la vairable");
    valor=prompt("Introduce el valor de "+key);
    lista[key]=valor;
   salir= prompt("Si deseas salir pulsa 1");
    
    salir=parseInt(salir);
 
}while(salir!==1);

for (var clave in lista){
    //document.write(clave+": "+lista[clave]);
    cadena=cadena.concat(clave+"="+lista[clave]+"&");
}
document.write(cadena);


