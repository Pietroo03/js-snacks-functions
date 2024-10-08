/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function number_of_vowel (str) {
    let count = 0
    let vowels = []
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            count++
            vowels.push(str.charAt(i))
        }
    }
    const output_function = `${str} : ${count} (${vowels})`
    return output_function;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(number_of_vowel(word))



//Risultato atteso se si passa 'javascript': 3 (a, a, i)