//Business Logic
let sum = 0;
function Turn(){
  let roll = Math.floor(Math.random() * 6) + 1;
    if(roll !== 1) {
      sum += roll;
        if(sum >= 100)
          window.alert("winner winner chicken dinner");
      }
    else {
      sum = 0;
      }
      return sum;
    } 