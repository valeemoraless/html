document.querySelector('#header').innerHTML = "Estoy leyendo el documento cesta"

var cesta = []
var opcion


console.log(cesta)



function ver_cesta() {
    alert(cesta)
}

function agregar_fruta() {
    var respuesta = prompt("que fruta quiere agregar")
    cesta.push(respuesta)
    console.log(cesta)

}

function quitar_fruta() {
    cesta.pop()
    console.log(cesta)

}


function quitar_fruta_especifica() {
    var respuesta = prompt("que fruta quiere eliminar")
    cesta.splice(respuesta)
    console.log(cesta)

}


var salir = false

do {

    var opcion = prompt("1. ver contenido de la cesta\n2. agreagar una fruta a la cesta\n3. quitar la ultima fruta de la cesta\n4. quitar fruta especifica\n5. salir del programa")


    switch (parseInt(opcion)) {
        case 1:
            ver_cesta()
            break
        case 2:
            agregar_fruta()
            break
        case 3:
            quitar_fruta()
            break
        case 4:
            quitar_fruta_especifica()
            break
        case 5:
            salir = true
            break

    }

} while (salir == false)