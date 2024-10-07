/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function take_first_letter () {
    let capital_letters = []
    for (let i = 0; i < names.length; i++) {
        let single_name = names[i]  
        capital_letters.push(single_name.charAt(0))
    }
    console.log(capital_letters);
}

// Invoca la funzione qui e stampa il risultato in console
take_first_letter()


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]