document.querySelector('#header').innerHTML = "Estoy leyendo el documento proyecto"

let arreglo = []
var largo = parseInt(prompt("Digite la cantidad de los elementos del arreglo"));

let finalizar = false;

function construir(largo) {
    arreglo.length = largo
}

function llenar() {

    let numeroAleatorio;
    for (let i = 0; i < arreglo.length; i++) {
        numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    }
    console.log(arreglo)
}

function promedioArreglo() {
    let sumaTotal = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumaTotal = sumaTotal + arreglo[i];
    }
    return sumaTotal / arreglo.length
}

function mayoresPromedio() {
    let promedio = promedioArreglo();
    let cantidadDeElementos = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > promedio) {
            cantidadDeElementos++;
        }
    }
    return cantidadDeElementos;
}

function sumaValor(aumentaArreglo) {
    arreglo.length = arreglo.length + aumentaArreglo
}

function sumaImpares() {
    let totalImpares = 0

    for (let i = 0; i < arreglo.length; i++) {

        if ((arreglo[i] % 2) != 0) {
            totalImpares = totalImpares + arreglo[i]
        }
    }
    return totalImpares
}

function mayorArreglo() {
    let valorMayor = 0

    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] > valorMayor) {
            valorMayor = arreglo[i]
        }
    }
    return valorMayor

}

function mayorDiferencia(arr) {
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
}


function encontrarElemento(arr, numero) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numero) {
            return true;
        }
    }
    return false;
}


if (encontrarElemento(arreglo, numeroBuscado)) {
    console.log("El número " + numeroBuscado + " se encuentra en el arreglo.");
} else {
    console.log("El número " + numeroBuscado + " no se encuentra en el arreglo.");
}

function encontrarElemento(arr, numero) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numero) {
            return true;
        }
    }
    return false;
}


if (encontrarElemento(arreglo, numeroBuscado)) {
    console.log("El número " + numeroBuscado + " se encuentra en el arreglo.");
} else {
    console.log("El número " + numeroBuscado + " no se encuentra en el arreglo.");
}

function invertirArreglo(arr) {
    const arregloInvertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arregloInvertido.push(arr[i]);
    }
    return arregloInvertido;
}


function insertarElemento(arr, posicion, valor) {
    if (posicion < 0 || posicion > arr.length) {
        console.log("La posición no es válida.");
        return;
    }

    const nuevoArreglo = [...arr.slice(0, posicion), valor, ...arr.slice(posicion)];
    return nuevoArreglo;
}

const nuevoArreglo = insertarElemento(arreglo, posicion, valor);

if (nuevoArreglo) {
    console.log("Arreglo original:", arreglo);
    console.log("Arreglo después de la inserción:", nuevoArreglo);
}

function mostrarArreglo(arr) {
    let contenido = "";
    for (let i = 0; i < arr.length; i++) {
        contenido += arr[i];
        if (i !== arr.length - 1) {
            contenido += ", "; // Agregar coma y espacio entre elementos, excepto para el último elemento
        }
    }
    return contenido;
}




var inicio = true

do {
    var resultado = parseInt(prompt("1. Construir arreglo\n2. Llenar arreglo \n3. promedio del arreglo\n4. Mayores del promedio\n5. Suma de valores\n6. Suma de valors impares\n7. Mayor del arreglo\n8. Mayor diferencia de elementos\n9. Encontrar elemento\n10. Invertir el arreglo\n11. Insertar elemento\n12. Mostrar arreglo\n13. finalizar aplicacion"))

    switch (resultado) {
        case 1:
            construir()
        break
        case 2:
            llenar()
        break
        case 3:
            promedioArreglo()
        break
        case 4:
            mayoresPromedio()
        break
        case 5:
            sumaValor()
        break
        case 6:
            sumaImpares()
        break
        case 7:
            mayorArreglo()
        break
        case 8:
            mayorDiferencia()
        break
        case 9:
            encontrarElemento()
        break
        case 10:
            invertirArreglo()
        break
        case 11:
            insertarElemento()
        break
        case 12:
            mostrarArreglo()
        break
        case 13:
            inicio = false
        break
    }



} while (inicio)