var mensaje;
mensaje = "estoy leyendo el documento whileSwitch.js"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje
var inicio = true



function suma_de_numeros(){
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1)+parseInt(numero2))

}

function resta_de_numeros(){
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1)-parseInt(numero2))

}

function multiplicacion_de_numeros(){
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1)*parseInt(numero2))

}

function division_de_numeros(){
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1)/parseInt(numero2))

}

while(inicio == true){
/* var respuesta = prompt("eres feliz?\nEscribe 1 para si\Escribe 2 para no")
    if(respuesta == "1"){
        inicio = false
    } */

    var respuesta = prompt("1. Suma\n2. Resta\n3. Multiplicar\n4. dividir\n5. finalizar")
    switch(parseInt(respuesta)){
        case 1:
            suma_de_numeros()
        break
        case 2:
            resta_de_numeros()
        break
        case 3:
          multiplicacion_de_numeros()
        break
        case 4:
            division_de_numeros()
        break
        case 5:
            var inicio = false
           
    }





}// fin while