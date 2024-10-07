/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const aName = 'Mario';


// Dichiara la funzione qui.
function say_hi_to_user () {
    let date = new Date()
    let hour = date.getHours()
    if (hour < 12) {
        return `Buongiorno ${aName}`
    } else if (hour > 12 && hour < 17) {
        return `Buon pomeriggio ${aName}`
    } else if (hour > 17) {
        return ` Buonasera ${aName}`
    }
}


// Invoca la funzione qui e stampa il risultato in console
console.log(say_hi_to_user());



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.