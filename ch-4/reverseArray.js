function reverseArray(array) {
    let reversedArray = [] 
    for(let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    } return reversedArray;
}

function reverseArrayInPlace(array) {
    for(let i = 0; i <= Math.floor(array.length/2); i++) {
        let a = array[i];
        let b = array[array.length-i-1];
        array[i] = b;
        array[array.length-i-1] = a;

    }
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);