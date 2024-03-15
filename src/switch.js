document.querySelector('#header').innerHTML = "Estoy leyendo el documento switch"
var fruta 
var mensaje
var userInput = prompt("ingrese el sabor de su fruta")

function jugo_de_fresas() {
    
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "pink";
}


function jugo_de_naranja() {
    mensaje = "batir naranjas y mandarinas"
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "orange";
}



function servir_vaso_de_agua() {

   mensaje = "servir vaso con agua"
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "blue";
}




fruta = userInput.toLowerCase()
switch(fruta){
    case "fresa":
        mensaje = "batir fresas"
        jugo_de_fresas()
    break
    case "naranja":
    case "nsandarina":
        jugo_de_naranja()
    break
    default:
        servir_vaso_de_agua()
    break

}