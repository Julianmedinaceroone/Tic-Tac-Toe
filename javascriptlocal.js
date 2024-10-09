let turno = 0; /* inicializar turno a 0*/

/*Creamos array tablero*/
const tablero = [];

/*Función boton pulsado y le pasamos el evento que se produce y la posicion*/
const btnPulsado = (e, pos) =>{
    turno++;

    /*creo btn para poder cambiarlo de color y lo inicializo al boton en el que se produjo el evento*/
    const btn = e.target;

    const color = turno % 2 ? 'fuchsia' : 'Green';
    /*
    let color;
        if (turno % 2 !== 0) {
             color = 'salmon';
        } else {
             color = 'paleGreen';
        }
    */

    btn.style.backgroundColor = color;
    
    /*En la posicion donde se produjo el evento le meto el color ES COMO ACTUALIZAR EL ARRAY TABLERO*/    
    tablero[pos] = color;
    if(haGanado())alert('Enhorabuena player ' + color);

}


/*Para comprobar si ha ganado*/
const haGanado = () =>{
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }
    return false;
}


/*Cojemos todos los botones y los recorremos segun el boton=obj y el lugar donde esta en el tablero
y que cuando hagamos click se produzca un evento que llame a la funcion btnPulsado*/
document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e)=> btnPulsado(e,i)));


  
