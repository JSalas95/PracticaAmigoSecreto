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
    let ul = document.querySelector("ul"); //seleccionamos la ubicación donde crearemos la lista de amigos
    let li = document.createElement("li"); //declaramos el elemento li a agregar
    li.appendChild(document.createTextNode(element)); //creamos el nodo de texto al elemento li
    ul.appendChild(li); //le asignamos el elemento li al elemento ul
    //console.log(element); //mostramos el elemento en la consola para verificar que el codigo este correcto
    }
   
}


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
