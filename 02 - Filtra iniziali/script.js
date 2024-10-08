/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function array_names_start_with(array, letter) {
    const filtered_names = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === letter) {
            filtered_names.push(array[i])
        }
    }
    return(filtered_names); 
}

// Invoca la funzione qui e stampa il risultato in console
console.log(array_names_start_with(names, 'A'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]