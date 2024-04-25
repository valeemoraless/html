document.querySelector('#header').innerHTML = "Estoy leyendo la tarea"

var lista = []
var opcion


console.log(lista)


function agregar_tarea() {
    var respuesta = prompt("que tarea quiere agregar")
    lista.push(respuesta)
    console.log(lista)

}


function quitar_tarea() {
    respuesta = prompt("desea eliminar esta tarea")
    if (respuesta == "si"){
    var eliminartarea = parseInt(prompt("que tarea quiere eliminar"))
        alert(lista.splice(eliminartarea, 1))
    }
}


function modificar_tarea() {
    var modificartarea = parseInt(prompt(" que tarea desea modificar"))
    alert(lista[modificartarea])
    var modifi = prompt("ingrese la modificacion que deseea")
    alert(lista[modificartarea] = modifi)
    
}



function ver_lista() {
    alert(lista)
}

var salir = false

do {

    var opcion = prompt("1. agregar tarea a la lista\n2. eliminar tarea de la lista\n3. modificar la lista\n4. ver la lista\n5. salir del programa")


    switch (parseInt(opcion)) {
        case 1:
            agregar_tarea()
            break
        case 2:
            quitar_tarea()
            break
        case 3:
            modificar_tarea()
            break
        case 4:
            ver_lista()
            break
        case 5:
            salir = true
            break

    }

} while (salir == false)