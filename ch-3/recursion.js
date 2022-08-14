function isEven(number) {
    if(number < 0) {
      return false;
    }
    switch(number) {
      case 0:
        return true;
      case 1:
        return false;
      default:
        return isEven(number-2);
    }
  }
  
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));