function range(start, end, step=1) {
    let rangeArray = []
    for(let i = start; i != end; i += step) {
        rangeArray.push(i);
    }
    rangeArray.push(end);
    return rangeArray;
}

function sum(array) {
    let sumCounter = 0;
    for(let i = 0; i < array.length; i++) {
        sumCounter += array[i];
    } return sumCounter;

}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
