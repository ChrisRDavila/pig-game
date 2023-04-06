//Business Logic
const playerOneScore = 0;
const playerTwoScore = 0;
const currentPlayer = 1;


function diceRoll(){
  let roll = Math.floor(Math.random() * 6) + 1;
   
  if(roll !== 1) {
    if(currentPlayer === 1)
      score1 += roll;
        if(score1 >= 100)
          window.alert("winner winner chicken dinner");
          reset();
      }
    else {
      score2 += roll;
      } if(score2 >= 100){
         window.alert("winner winner chicken dinner");
         reset();
      }
    else {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    updateScore();
}
  function reset() {
    score1 = 0;
    score2 = 0;
    currentPlayer = 1;
    updateScore();
  }

  function updateScore() {
    document.getElementById("score1").textContent = score1;
    document.getElementById("score2").textContent = score2;
  }

// UI Logic
document.getElementById("rollDice").addEventListener("click", diceRoll );}

//function displayWinner(event) {

//}

//function handleClick(event){

//}

//window.addEventListener("load, function()"{

//})