// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //declaramos el array donde estaremos almacenando los nombres de amigos añadidos

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; //tomamos el nombre de la caja de texto
    //console.log(amigo); //comprobamos que el nombre se haya tomado de la caja de texto
    if (typeof amigo === 'string' && amigo.length === 0){ //comparamos que la información ingresada sea de tipo string y que su longitud sea 0
        alert('Por favor, agrega un nombre'); //alertamos que no contiene ningun nombre/valor de texto ingresado
    } else {
        amigos.push(amigo); //actualizamos el array de amigos para ir almacenandolos
        limpiarCaja(); //ejecutamos la función de limpiar caja
        listaAmigos(); //ejecutamos la función para enlistar los amigos fuera del array
    }
    //console.log(amigos); //mostramos en la consola el array para comprobar que los nombres se estén almacenando 
}
function listaAmigos(){
    let lista = document.querySelector("ul"); //declaramos la variable con la que haremos la limpieza de cada lista
    lista.innerHTML = ""; //Limpiamos la lista para evitar duplicados
    for (let index = 0; index < amigos.length; index++) { //obtenemos los datos del array
    let element = amigos[index]; //declaramos variable en la cual indexaremos los nombres fuera del array
    let ul = document.querySelector("ul"); //declaramos la variable donde seleccionamos la ubicación donde crearemos la lista de amigos
    let li = document.createElement("li"); //declaramos el elemento li a agregar
    li.appendChild(document.createTextNode(element)); //creamos el nodo de texto al elemento li
    ul.appendChild(li); //le asignamos el elemento li al elemento ul
    //console.log(element); //mostramos el elemento en la consola para verificar que el codigo este correcto
    }
}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';//seleccionamos la caja para limpiarla al ejecutar la función
}
function sortearAmigo(){
    if (amigos.length < 2){ //comprobamos que el array contenga por lo menos 2 valores diferentes (Nombre o número para identificar al participante)
        alert('Por favor, agrega por lo menos 2 nombres'); //Alerta para indicar que el sorteo requiere de al menos 2 participantes
    } else{
        let numeroSorteado = Math.floor(Math.random()*amigos.length); //Creamos un número desde 0 hasta el largo total del array
        //console.log(numeroSorteado); //mostramos el número en consola y verificamos que esté dentro del rango limitado (longitud de array)
        let ganador = Array(amigos[numeroSorteado]);//obtenemos el valor del array con la posición del número obtenido
        //console.log(ganador); //mostramos en consola el valor extraído del array
        asignarTextoElemento('h2', 'El ganador del sorteo es:'); //asignamos el texto al título cuando se haya realizado el sorteo
        asignarTextoElemento('h3', 'Sortear nuevamente'); //agregamos este texto en el botón para realizar otro sorteo con los mismos participantes
        document.querySelector('#amigo').style.display = 'none'; //ocultamos la caja de texto
        document.querySelector('#añadir').style.display = 'none'; //ocultamos el botón añadir
        let lista = document.querySelector("ul"); //declaramos la variable en la cual indexaremos el nombre del ganador
        lista.innerHTML = ""; //limpiamos la lista actual del html
        let ul = document.querySelector("ul");//declaramos la variable donde seleccionamos la ubicación donde colocaremos al ganador
        let li = document.createElement("li") //declaramos el elemento li a agregar
        li.appendChild(document.createTextNode(ganador)); //creamos el nodo de texto al elemento li, con el nombre del ganador
        ul.appendChild(li); //le asignamos el elemento li al elemento ul
        alert('Para realizar un sorteo con nuevos participantes, por favor actualice esta página'); //opcional
    }
}
function asignarTextoElemento(elemento, texto){ //se le agregaron variables (elemento y texto) para poder reusarlas "n" veces
    let elementoHTML = document.querySelector(elemento); //introducimos este par de lineas para ejecutarlas mas abajo
    elementoHTML.innerHTML = texto;
    return;//se coloca este retornar información
}

function condicionesIniciales(){
    asignarTextoElemento('h2', 'Digite el nombre de sus amigos'); //Establecemos el texto para este elemento
    asignarTextoElemento('h3', 'Sortear amigo'); //Establecemos el texto para este elemento
    document.querySelector('#amigo').style.display = 'true'; //Mostramos la caja de texto
    document.querySelector('#añadir').style.display = 'true'; //mostramos el botón añadir
}

condicionesIniciales();
