class PGroup {
    constructor(array = []) {
        this.content = array;
    }
    has(value) {
        return this.content.includes(value);
    }
    add(value) {
        if(!this.has(value)) return new PGroup(this.content.concat([value]));
    }
    delete(value) {
        if(this.has(value)) {
            return new PGroup(this.content.filter(
                (item) => {
                    return item != value
                }
            ));
        }
    }

}

PGroup.empty = new PGroup()

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false