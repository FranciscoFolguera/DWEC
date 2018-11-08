/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





//programa que permita introducir un numero y muestre el mensaje es < o > de 10 segun corresponda
/*
 var num1 = prompt("Introduce un numero");
 alert(num1);
 
 if (num1 < 10) {
 alert("El número " + num1 + " es menor de 10");
 
 } else if (num1 > 10) {
 alert("El número " + num1 + " es mayor de 10");
 } else if (num1 === 10) {
 alert("El número " + num1 + " es igual a 10");
 
 };
 */




// programa que meteindo un numero por teclado de 1 a 5 te escriba el valor de ese nº o que te salga un mensaje de error si de diera el caso
/*
 var num1 =parseInt( prompt("Introduce un numero"));
 alert(num1);
 
 switch (num1){
 case 1: alert("uno");
 break;
 case 2: alert("dos");
 break;
 case 3: alert("tres");
 break;
 case 4: alert("cuatro");
 break;
 case 5: alert("cinco");
 break;
 
 default :(alert("Error"));
 }
 */


//programa basae y exponente recurisvdidad



/*
 var base;
 var exponente;
 var resultado;
 
 
 base= parseInt(prompt("Introduce base"));
 exponente= parseInt(prompt("Introduce exponente"));
 resultado= potencia(base,exponente);
 alert(resultado);
 
 
 
 
 function potencia(numBase, numExp) {
 
 if(numExp===0){
 return (1);
 }else{
 return (numBase*potencia(numBase,(numExp-1)));
 }
 
 }*/


/*
 function  funcion() {
 var b = 2;
 var a = 9;
 a += 2;
 alert(a);
 }
 
 
 var a = 7;
 funcion();
 alert(b);
 
 alert(a);
 */
/*
 function Persona (txtNombre, nEdad){
 //Definición de propiedades
 this.nombre= txtNombre;
 this.edad= nEdad;
 //Definición de métodos
 
 
 this.dime_nombre= function fnNombrar(){
 this.nombre= prompt("Intoduce su nombre");
 };
 
 
 
 }
 function Alumno (objPersona, intNota){
 this.people= objPersona;
 this.nota= intNota;
 
 
 this.situacion= function fnSituacion(){
 this.nota= prompt("Intoduce su nota");
 if(this.nota>=5){
 document.write("APROBADO");
 }else if (this.nota<5){
 document.write("SUSPENSO");
 }
 };
 
 
 
 }
 
 
 var ejemplo = new Persona();
 ejemplo.dime_nombre();
 document.write(ejemplo.nombre);
 
 ejemplo.edad=5;
 document.write(ejemplo.edad+"\n");
 
 
 var alumno1= new Alumno(ejemplo);
 
 alumno1.situacion();
 document.write(alumno1.nota);
 
 
 */


// var alumno= new Persona("Francisco Folguera", 20);   
//alumno.envejecer();
//alumno.edad.toString();



/*
 hacer un programa que contenga la definicion de respuesto
 */
/*
 function Persona (txtNombre,  intEdad){
 
 this.nombre= txtNombre;
 this.edad= intEdad;
 
 this.crear= function fnCrear(){
 
 this.nombre= prompt("Intoduce su nombre");
 this.edad= prompt("Intoduce su edad");
 };
 
 this.copiar= function fnCopiar(objPersona){
 
 objPersona.nombre= this.nombre;
 objPersona.edad= prompt("Introduce la nueva edad");
 };
 }
 
 var persona1= new Persona();
 persona1.crear();
 document.write(persona1.nombre+" de edad: "+persona1.edad+"<br>");
 
 var persona2= new Persona();
 persona1.copiar(persona2);
 
 
 
 document.write(persona2.nombre+" de edad: "+persona2.edad+"<br>");
 
 document.write(persona1.nombre+" de edad: "+persona1.edad+"<br>");
 
 document.write(persona2.nombre+" de edad: "+persona2.edad+0"<br>");
 
 document.write(persona1.nombre+" de edad: "+persona1.edad+"<br>");
 */
/*
 var person = new Object();
 person.firstname="Jaden";
 person.age=20;
 person.eyeColor="blue";
 
 person.envejecer= function (){
 person.age+=10;
 };
 
 
 person.envejecer();
 
 document.write(person.age);
 
 
 var nomPersonas= new Array("Kiko", "Rafa","Usama", "Anthony");
 for(var i=0;i<nomPersonas.length; i++ ){
 document.write(nomPersonas[i]);
 document.write("<br>");
 };
 
 /*
 Crear un array de objetos
 */
/*
 function Persona(txtNombre, intEdad) {
 
 this.nombre = txtNombre;
 this.edad = intEdad;
 
 this.crear = function fnCrear() {
 
 this.nombre = prompt("Intoduce su nombre");
 this.edad = prompt("Intoduce su edad");
 };
 
 
 }
 
 var mi_persona = new Array();
 
 salir = false;
 var contador=0;
 do {
 
 var respuesta = prompt("¿Quieres crear una persona? 1/0");
 if (respuesta === "1") {
 mi_persona[contador] = new Persona();
 mi_persona[contador].crear();
 contador+=1;
 
 } else {
 salir = true;
 }
 
 } while (salir == false);
 
 
 for (var j =0;  mi_persona.length>j; j++) {
 document.write(mi_persona[j].nombre);
 
 */


//document.write(listaNum);
/*
 var x = Math.floor((Math.random() * 20) + 1);
 var y = Math.floor((Math.random() * 20) + 1);
 var z = Math.floor((Math.random() * 20) + 1);
 var m = Math.floor((Math.random() * 20) + 1);
 var n = Math.floor((Math.random() * 20) + 1);
 
 var listaNum = new Array(x, y, z, m, n);
 document.writeln("Lista original: "+listaNum+"<br>");
 
 listaNum.sort();
 document.write(listaNum);
 /*
 for (var ind = 0; ind < listaNum.length; ind++) {
 
 for (var j = 0; j < listaNum.length; j++) {
 var ayuda;
 if (listaNum[ind] < listaNum[j]) {
 ayuda = listaNum[ind];
 listaNum[ind] = listaNum[j];
 listaNum[j] = ayuda;
 }
 }
 
 document.write(listaNum + "<br>");
 
 
 }
 */
/*
 var cambio= false;
 do{
 cambio= false;
 for( var k=0; k<listaNum.length-1; k++){
 
 if(listaNum[k]>listaNum[k+1]){
 var aux;
 aux=listaNum[k];
 listaNum[k]= listaNum[k+1];
 listaNum[k+1]= aux;
 cambio =true;
 }else{
 cambio= false;
 }
 document.write(listaNum+"<br>");
 }
 
 }while(cambio==true);
 */
/*
var tabla = new Array();

for (var i = 0; i <18; i++) {

    tabla[i] = new Array();
    for (var j = 0; j < 12; j++) {
        tabla[i][j] = new Array();
    }
}




var año;
var mes;
var aux;
var nacimientos;
var salir = false;
var parar = false;



var salir = false;
var end = false;



//for (var i=0; i<18; i++){
//    
//    tabla[i]
//}

do {
    end=false;
    do {
        año = prompt("Introduce un año entre 2000 y 2018");
        if (año <= 2018 & año >= 2000) {
            año -= 2000;
            salir = true;
        }

    } while (salir === false);

    do {
        salir = false;
        mes = prompt("Introduce un mes  nº");
        if (mes <= 12 & mes >= 1) {
            mes -= 1;
            salir = true;
        }

    } while (salir === false);

    do {
        salir = false;
        nacimientos = prompt("Introduce un nº de naciminetos");
        if (nacimientos >= 0) {
            tabla[año][mes] = (nacimientos);
            salir = true;
        }

    } while (salir === false);

    aux = prompt("Si no quieres meter mas datos pulsa 0");
    
    if (aux === 0) {
        end = true;
    }



} while (end === false);




for (var i = 0; i <18; i++) {
    for (var j = 0; j < 12; j++) {
        document.write(tabla[i][j]);
    }
}
*/