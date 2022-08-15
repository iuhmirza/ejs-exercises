function deepEqual(one, two) {
    if(typeof one === typeof two) {
        if(typeof one === 'object') {
            propertiesOne = Object.keys(one)
            propertiesTwo = Object.keys(two)
            for(let i = 0; i < propertiesOne.length; i++) {
                if(!deepEqual(one[propertiesOne[i]], two[propertiesTwo[i]])) {
                    return false
                }
            } return true
        } else {
            if(one === two) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true