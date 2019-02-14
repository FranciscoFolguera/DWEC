
class producto{
    
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    
}
var pollo= new producto("pooooollo",5);

for(var prop in pollo){
    document.write(prop+": "+pollo[prop]);
}