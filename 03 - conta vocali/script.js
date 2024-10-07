/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function number_of_vowel () {
    let count = 0
    let vowels = []
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' || word.charAt(i) == 'o' || word.charAt(i) == 'u') {
            count++
            vowels.push(word.charAt(i))
        }
    }
    const output_function = `${word} : ${count} (${vowels})`
    console.log(output_function);
}

// Invoca la funzione qui e stampa il risultato in console
number_of_vowel()



//Risultato atteso se si passa 'javascript': 3 (a, a, i)