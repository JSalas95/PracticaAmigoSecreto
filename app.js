// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //declaramos el array donde estaremos almacenando los nombres de amigos añadidos

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; //tomamos el nombre de la caja de texto
    console.log(amigo); //comprobamos que el nombre se haya tomado de la caja de texto
    if (typeof amigo === 'string' && amigo.length === 0){ //comparamos que la información ingresada sea de tipo string y que su longitud sea 0
        alert('Por favor, agrega un nombre'); //alertamos que no contiene ningun nombre/valor de texto ingresado
    } else {
        amigos.push(amigo); //actualizamos el array de amigos para ir almacenandolos
        limpiarCaja();
    }
    console.log(amigos); //mostramos en la consola el array para comprobar que los nombres se estén almacenando 
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
