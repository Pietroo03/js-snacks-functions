/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function array_names_start_with_a() {
    const array_function = []
    for (let i = 0; i < names.length; i++) {
        if (names[i].charAt(0) === 'A') {
            array_function.push(names[i])
        }
    }
    console.log(array_function);
    
}

// Invoca la funzione qui e stampa il risultato in console
array_names_start_with_a()


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]