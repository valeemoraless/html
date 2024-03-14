var mensaje = "batir las fresas"
var hay_fresas;
var hay_peras;
var hay_mangos;


function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "pink";
}



function jugo_de_mango() {
    window.alert(mensaje);
    ('batir los mangos')
    document.querySelector('#header').innerHTML = mensaje
}


function servir_vaso_de_agua() {
    window.alert(mensaje);
    ('sirvame el vaso con el agua');
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "blue";
}

function jugo_de_peras() {
    window.alert(mensaje);
    ('batir peras');
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "green";
 }

 document.querySelector('#header').style.background = "red";



hay_fresas = true;
hay_peras = false;
hay_mangos = false;
if (hay_fresas) {
    mensaje = 'batir fresas';
  jugo_de_fresas();
} else if (hay_peras) {
    mensaje = 'batir peras';
  jugo_de_peras();
}  else if (hay_mangos) {
    mensaje = 'batir mangos';
  jugo_de_mango();
} else {
    mensaje = 'sirvame agua'
  servir_vaso_de_agua();
}
