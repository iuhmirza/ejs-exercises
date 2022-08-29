class Group {
    constructor() {
      this.content = [];
    }
    add(value) {
      for(let member of this.content) {
        if(member === value) return;
      }
      this.content.push(value);
    }
    delete(value) {
        this.content.splice(this.content.indexOf(value));
    }
    has(value) {
      for(let member of this.content) {
        if(member === value) return true;
      }
      return false;
    }
    static from(iterable) {
      let group = new Group()
      for(let member of iterable) {
        group.add(member);
      }
      return group;
    }
    [Symbol.iterator](){
      return new GroupIterator(this)
    }
  }
  
  class GroupIterator {
    constructor(group) {
      this.index = 0;
      this.group = group;
    }
    next() {
      if(this.index === this.group.content.length) {
        return {done: true};
      }
      let value = this.group.content[this.index];
      this.index++
      return {value, done:false};
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c