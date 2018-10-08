function Persona(txtNombre, txtDirecc){
    this.nombre= txtDirecc;
    this.direccion= txtDirecc;
    
    this.imprimirDatos= function fnDatos(){
        document.write("Nombre: "+ this.nombre);
        document.write("Direccion: "+ this.direccion);
    };
}

function Calificaciones(txtAsignatura, numNota){
    this.asignatura= txtAsignatura;
    this.nota= numNota;
    
    this.imprimirDatos= function fnDatos(){
        document.write("Nombre: "+ this.nombre);
        document.write("Direccion: "+ this.direccion);
    };
}
function Alumno (objPersona, listaCalificaciones, txtGrupo){
    this.people= objPersona;
    this.listacal= new Array [listaCalificaciones];
    
}