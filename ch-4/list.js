function arrayToList(array) {
    let list = {}
    if(array.length == 1) {
        list.value = array[0]
        list.rest = null
    } else {
        list.value = array.shift()
        list.rest = arrayToList(array)
    } return list
}

function listToArray(list) {
    let array = []
    array.push(list.value)
    for(let e=list.rest; e != null; e = e.rest) {
        array.push(e.value)
    } return array
}

function prepend(element, list) {
    let newList = {}
    newList.value = element
    newList.rest = list
    return newList
}


function nth(list, position) {
    if(position == 0) {
        return list.value
    } else {
        return nth(list.rest, position-1)
    }
}

console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1))
// → 20