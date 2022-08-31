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
        this.content.splice(this.content.indexOf(value), 1);
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
  }
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false