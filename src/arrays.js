document.querySelector('#header').innerHTML = "Estoy leyendo el documento arrays"

var cesta = ["Fresa","Pera","Cereza"]

console.log(cesta)

cesta[0] = "Uva" // para modificar el valor de una posicion

console.log(cesta.length) // ver el tamaño del array

cesta.push("Naranja") // agrega un elemento a la array
console.log(cesta)

cesta.pop() // elimina elultimo elemento de la array
console.log(cesta)

cesta.push("Naranja")
cesta.push("Piña")
console.log(cesta)