
var options = {
    enableHighAccuracy: true,
    timeout: 5,
    maximumAge: 0
};

function success(pos) {

    var crd = pos.coords;
   

 
     document.getElementById('info').innerHTML='Latitude'+crd.latitude +' longitd: '+crd.longitude+' precision +-: '+crd.accuracy;
     console.log('Your current position is:');
     console.log('Latitude : ' + crd.latitude);
     console.log('Longitude: ' + crd.longitude);
     console.log('Mas o menos diferencia metros ' + crd.accuracy + ' meters.');
     
}
;

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
}
;


navigator.geolocation.getCurrentPosition(success, error, options);

//document.images["miImagen"].border=