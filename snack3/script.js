
// FUNCTION
/**
 * Ritorna i valori dell'array che hanno la posizione compresa tra a e b
 * 
 * @param {array} array 
 * @param {number} a deve essere un numero più piccolo di b
 * @param {number} b deve essere < array.lenght
 * @returns 
 */
function betweenNumbers(array, a, b){
    let newArray = []
    for(let i = a; i< array.length && i<=b; i++){
        newArray.push(array[i])
    }
    return newArray;
}

const myArray = [2,3,4,5,6,7,8,9,0,9,7,1]
const intro = betweenNumbers(myArray, 2, 7)
console.log(intro)