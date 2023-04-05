//Business Logic
let sum = 0;
function Turn(){
  let roll = Math.floor(Math.random() * 6) + 1;
    if(roll !== 1) {
      sum += roll;
      }
    else {
      sum = 0;
      }
      return sum;
    } 