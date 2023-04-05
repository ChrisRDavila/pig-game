Describe: Roll()

Test: "Testing to see if we can get a random number from our function each time."
Code: function Turn() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;}
Expected Output: random number between 1 through 6.

Test: "If dice rolls a 1, true, and returns false if not 1."
## Code:
if(roll === 1) {
    return true;
    }
else {
    return roll
    }
## Expected Output: 
True for 1 or roll 2-6.

## Test: 
if player rolls a 2 or greater will add to sum, if player rolls a 1, turn is zeroed out and no points are added to players score.
## Code: 
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
## Expected Output: 
if player rolls a 1 at any point then sum of points will reset to 0, if player rolls number other than 0, roll adds to previous roll