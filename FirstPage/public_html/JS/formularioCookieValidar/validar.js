/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validaCheckbox(formUno) {
    var cont = 0;
    for (var i = 0; i < formUno.elements["deportes"].length; i++) {
        if (formUno.elements["deportes"][i].checked) {
            cont++;
        }
        
    }
    if(cont===0){
        alert('Selecciona uno de los deportes como minimo');
    }

}
function validar(formUno) {

}


