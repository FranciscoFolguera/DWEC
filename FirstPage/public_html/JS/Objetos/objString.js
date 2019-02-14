/*
 var cadena = "Soy BATMAN NANNANANANA";
 for (var i = 0; i < cadena.length; i++) {
 document.write(cadena.charAt(i) + "<br>");
 }
 
 function valido(Str1) {
 
 var expreg = new RegExp("^91[0-9]{7}$", "g");
 
 if (expreg.test(Str1)) {
 return Str1 + "Todo est OK";
 } else {
 return Str1 + "NO ESTA BIEN";
 }
 
 
 
 }
 
 
 function validoCorreo(Str1) {
 
 var expreg = new RegExp("^[a-zA-Z],[@],[.]@gmail.com$", "g");
 
 if (expreg.test(Str1)) {
 return Str1 + "Todo est OK";
 } else {
 return Str1 + "NO ESTA BIEN";
 }
 
 
 
 }
 document.write(valido("897987898949849"), "<br>");
 document.write(valido("dsfd112"), "<br>");
 
 document.write(valido("622234882"), "<br>");
 document.write(valido("912234882"), "<br>");
 
 document.write(validoCorreo("kiko@gmail.com"), "<br>");
 document.write(validoCorreo("912234882"), "<br>");
 */
/*
var dni = "";
var expreg = /^[0-9]{8}[A-Z]{1}$/g;
var validado = false;
var cadenaNum = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];


do {
    dni = prompt("Introduce el DNI: ");
    if (expreg.test(dni) === true) {
        alert("SI");
        validado = true;
    } else {
        alert("NO");
    }
} while (validado === false);




var resto = dni.substr(0, 8) % 23;
document.write(cadenaNum[resto]+"<br>");
document.write(resto+"<br>");
document.write(dni.substr(1, 8)+"<br>");




if (resto === cadenaNum[resto]) {
    document.write("OK");
}else{
    document.write("NO");
}


document.write(dni);
calcNumDni(dni);
*/
/*

var conta=0;
var sumar=0;
var salir=false;

setInterval("repe()",500);
function repe(){
 document.title=(conta);
        if(conta===0){
            sumar=1;
        }else if(conta===10){
            sumar-=1;
        }
        conta= conta+ sumar;
       
}


*/
var miCadena="esto es una cadena tt";
var str1= miCadena.toLocaleUpperCase();
          document.write(str1+"<br>");
          
               var numpag = 10;
          document.write (eval("numpag"));  // Visualiza el contenido de numpag: 10
          var var1 = "numpag";
        // Modo indirecto (sin comillas)
          document.write (eval(var1));      // Visualiza el contenido de numpag: 10
          //document.write (eval("20 + 4");  




 var miCadena1 = "áéíóú aeiou &%'";
          document.write (escape(miCadena1) + "<br>");  // Devuelve %E1%E9%ED%F3%FA%20aeiou%20%26%25%27
          var miCadena2 = unescape(miCadena1);
          document.write (miCadena1);  