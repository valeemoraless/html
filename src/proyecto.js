document.querySelector('#header').innerHTML = "Estoy leyendo el documento proyecto"

let arreglo = []
var largo = parseInt(prompt("Digite la cantidad de los elementos del arreglo"));

let finalizar = false;

function construir(largo){
    arreglo.length = largo
}

function llenar(){

    let numeroAleatorio;
    for(let i = 0; i < arreglo.length; i++){
        numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    }
    console.log(arreglo)
}

function promedioArreglo(){
let sumaTotal = 0;
for(let i = 0; i < arreglo.length; i++){
    sumaTotal = sumaTotal + arreglo[i];
}
return sumaTotal / arreglo.length
}

function mayoresPromedio(){
    let promedio = promedioArreglo();
    let cantidadDeElementos = 0;

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > promedio){
            cantidadDeElementos++;
        }
    }
    return cantidadDeElementos;
}

function sumaValor(aumentaArreglo){
    arreglo.length = arreglo.length + aumentaArreglo
}

function sumaImpares(){
    let totalImpares = 0

    for(let i = 0; i < arreglo.length; i++){

        if( (arreglo[i] % 2) != 0){
            totalImpares = totalImpares + arreglo[i]
        }
    }
    return totalImpares
}

function mayorArreglo(){
    let valorMayor = 0

    for(let i = 0; i < arreglo.length; i++){

        if(arreglo[i] > valorMayor){
            valorMayor = arreglo[i]
        }
    }
    return valorMayor

}