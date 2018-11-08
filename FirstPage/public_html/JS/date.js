var fechaActual= new Date();
Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
};

Date.prototype.getMonthStr = function(){   
    return ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][ this.getMonth()];
};


document.write("Hoy es: "+fechaActual.getDayOfWeek()+", "+fechaActual.getDate()+" de "+fechaActual.getMonthStr()+" del "+fechaActual.getFullYear());


var fecha_3_meses= new Date();

fecha_3_meses.setTime(fechaActual.getTime()+(90+2+0+0+0));
document.write("<br>");

document.write(fecha_3_meses);
