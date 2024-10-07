/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const oneName = 'Mario';


// Dichiara la funzione qui.
function say_hi_to () {
    let hi = `Ciao ${oneName}`
    if (oneName.length != 0) {
        console.log(hi);
    }
}


// Invoca la funzione qui e stampa il risultato in console
say_hi_to()


//Risultato atteso se si passa 'Mario': // ciao Mario