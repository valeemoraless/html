document.querySelector('#header').innerHTML = "Estoy leyendo el documento switch"
var numero 
var mensaje
var userInput = prompt("ingrese el numero del dia de la semana")

function hoy_es_lunes() {
    
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "pink";
}


function hoy_es_martes() {
    mensaje = "Hoy es martes"
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "orange";
}



function hoy_es_miercoles() {

   mensaje = "Hoy es miercoles"
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "blue";
}

function hoy_es_jueves() {

    mensaje = "Hoy es jueves"
     document.querySelector('#header').innerHTML = mensaje
     document.querySelector('#header').style.color = "green";
 }

 function hoy_es_viernes() {

    mensaje = "Hoy es viernes"
     document.querySelector('#header').innerHTML = mensaje
     document.querySelector('#header').style.color = "purple";
 }


 function hoy_es_sabado() {

    mensaje = "Hoy es sabado"
     document.querySelector('#header').innerHTML = mensaje
     document.querySelector('#header').style.color = "yellow";
 }

 function hoy_es_domingo() {

    mensaje = "Hoy es domingo"
     document.querySelector('#header').innerHTML = mensaje
     document.querySelector('#header').style.color = "brown";
 }

 
 function dia_invalido() {

    mensaje = "este numero es invalido"
     document.querySelector('#header').innerHTML = mensaje
     document.querySelector('#header').style.color = "red";
 }





numero = parseInt(userInput)// con parseInt se convierte a entero
switch(numero){
    case 1:
        mensaje = "es lunes"
        hoy_es_lunes()
    break
    case 2:
        hoy_es_martes()
    break
    case 3:
        hoy_es_miercoles()
    break
    case 4:
        hoy_es_jueves()
    break
    case 5:
        hoy_es_viernes()
    break
    case 6:
        hoy_es_sabado()
    break
    case 7:
        hoy_es_domingo()
    break
    default:
        dia_invalido()
    break

}