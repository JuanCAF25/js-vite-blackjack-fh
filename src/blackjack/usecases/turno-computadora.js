import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Numbers} puntosMinimos puntos minimos para ganar la pc
 * @param {HTMLElement} puntosHTML HTML para mostra los puntos
 * @param {HTMLElement} divCartasComputadora HTML para mostrar cartas
 * @param {Array<String>} deck
 */


// turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error ('datos   necesarios')
    if (!puntosHTML) throw new Error ('datos   necesarios')

        let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append(imgCarta)

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
