
function createCookie() {
    var key = prompt("Nombre de la cookie");
    var value = prompt("Valor de la cookie");
    localStorage.setItem(key, value);
}
function getCookie() {
    var key = prompt("Nombre de la cookie");
    var value = localStorage.getItem(key);
    alert(value);
}
function deleteCookie() {
    var key = prompt("Nombre de la cookie");
    localStorage.removeItem(key);

}
function getAllCookie() {
    if (localStorage.length === 0) {
        alert("no hay cookies");
    } else {
        for (var i = 0, len = localStorage.length; i < len; i++) {
            var key = localStorage.key(i);
            var value = localStorage[key];

            alert(key + " => " + value);
        }

    }


}
function deleteAllCookie() {

    window.localStorage.clear();
    alert("Borradas todas las cookie");


}



if (localStorage.getItem("contador") === null) {
    localStorage.setItem("contador", 0);
    var ahora = new Date();
    ahora = ahora.getTime();
    localStorage.setItem("expiresC", ahora);
} else {

    var value = localStorage.getItem("contador");


    var cont = parseInt(value);
    cont += 1;
    localStorage.setItem("contador", cont);



}

window.onload = function () {
    var t = localStorage.getItem("expiresC");
    
    var d = new Date();
            d.setTime(t  +5 * 1000);
    if(t>=d){
        localStorage.removeItem("contador");
        localStorage.removeItem("expiresC");
        alert('Ha expirado');
    }else{
         alert('Nooooooo expirado');
       var value = localStorage.getItem("contador");

    document.getElementById("contador").innerHTML = "Visita numero: " + value; 
    }

    

}

