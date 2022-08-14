let state = false;
let size = 10;
for(let i = 0; i < size; i++) {
  let line = '';
  for(let j = 0; j < size; j++) {    
    if(state === false) {
      line += ' ';
      state = true;
      } else {
      line += '#';
      state = false;
      }
  }
  state = !state;
  console.log(line);
}