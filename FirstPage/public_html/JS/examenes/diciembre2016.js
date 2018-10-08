function Repuesto (txtDescription, intPCP, intPVP, intMeses){
    
    this.descripcion= txtDescription;
    this.pcp= intPCP;
    this.pvp= intPVP;
    this.meses_vida= intMeses;
    
    this.ganancia= function fnGanacia(){
        
        return (this.pvp-this.pcp);
    };
}

function Vehiculo (txtMatricula, txtModelo, objRepuesto){
    
    this.matricula= txtMatricula;
    this.modelo= txtModelo;
    this.recambio= objRepuesto;
    this.listRespuesto= new Array(); 
    
     
    
}
