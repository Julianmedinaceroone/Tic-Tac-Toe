let turno = 0;
let fase = 1;
const tablero = [];
let jugadorActual = 'Green';
let primerClicPos = null;

const btnPulsado = (e, pos) => {
    if (fase === 1) {
        colocarFicha(e, pos);
    } else if (fase === 2) {
        moverFicha(e, pos);
    }
}

const colocarFicha = (e, pos) => {
    if (turno < 6) {
        const btn = e.target;
        const color = turno % 2 ? 'fuchsia' : 'Green';

        if (!tablero[pos]) {
            btn.style.backgroundColor = color;
            tablero[pos] = color;
            turno++;

            // Verificar si ha ganado después de colocar la ficha
            if (haGanado()) {
                alert('¡Jugador ha ganado!');
                // No reiniciar el juego automáticamente aquí
            } else if (turno === 6) {
                fase = 2;
                alert('Comienza la fase 2: Mover fichas');
            }
        }
    } else {
        alert('Ya has colocado todas las fichas. Comienza la fase 2.');
    }
}


const moverFicha = (e, pos) => {
    const btn = e.target;

    if (primerClicPos === null) {
        // Primer clic: Seleccionar ficha a mover
        if (tablero[pos] === jugadorActual) {
            // Guardar la posición del primer clic
            primerClicPos = pos;
        } else {
            alert('¡Debes seleccionar tu propia ficha para mover!');
        }
    } else {
        // Segundo clic: Seleccionar posición de destino
        const posicionesAdyacentes = obtenerPosicionesAdyacentes(primerClicPos);

        if (posicionesAdyacentes.includes(pos) && !tablero[pos]) {
            // Mover la ficha a la posición de destino
            btn.style.backgroundColor = jugadorActual;
            tablero[pos] = jugadorActual;
            tablero[primerClicPos] = null; // Vaciar la posición original
            document.querySelectorAll('button')[primerClicPos].style.backgroundColor = ''; // Limpiar el color en la posición original

            // Reiniciar la variable para el próximo turno
            primerClicPos = null;

            // Cambiar el color del jugador para el próximo turno
            jugadorActual = (jugadorActual === 'fuchsia') ? 'Green' : 'fuchsia';

            // Verificar si ha ganado después del movimiento
            if (haGanado()) {
                alert('¡Jugador ha ganado!');
                // Puedes reiniciar el juego o realizar otras acciones según sea necesario
            }
        } else {
            alert('¡Debes seleccionar una posición adyacente y vacía para mover la ficha!');
        }
    }
}

const obtenerPosicionesAdyacentes = (pos) => {
    const filas = 3;
    const columnas = 3;
    const adyacentes = [];

    const fila = Math.floor(pos / columnas);
    const columna = pos % columnas;

    // Verificar posiciones adyacentes
    for (let i = Math.max(0, fila - 1); i <= Math.min(filas - 1, fila + 1); i++) {
        for (let j = Math.max(0, columna - 1); j <= Math.min(columnas - 1, columna + 1); j++) {
            if (i !== fila || j !== columna) {
                adyacentes.push(i * columnas + j);
            }
        }
    }

    return adyacentes;
}



const haGanado = () => {
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

document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i))
)