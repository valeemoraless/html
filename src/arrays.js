document.querySelector('#header').innerHTML = "Estoy leyendo el documento arrays"

var cesta = []

var opcion = promp("1. ver contenido de la cesta\n2. agreagr una fruta a la cesta\n3. quitar la ultima fruta de la cesta\n4. salir del programa")

console.log(cesta)

cesta[0] = "Uva" // para modificar el valor de una posicion

console.log(cesta.length) // ver el tamaño del array


cesta.splice(2,1)
console.log(cesta)

var cestaVacia = [] // crear un array nuevo