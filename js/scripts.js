//Business Logic
function Player (playerName) {
  this.totalScore = 0;
  this.turnScore = 0;
  this.playerName = playerName;
}

Player.prototype.rollDice = function() {
  let diceToss = Math.floor(Math.random() * 6) + 1;
  if (diceToss === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += diceToss;
  }
}
Player.prototype.namingPlayer = function () {
  this.nameOne = $("input#p1input-name").value();
  this.nameTwo = $("input#p2input-name").value();
}

Player.prototype.hold = function () {
  this.totalScore += this.turnScore:
  this.turnScore = 0;
}
Player.prototype.restart = function () {
  this.totalScore = 0;
  this.turnScore = 0;
}
// UI Logic
window.onload(function) {
  let newPlayer1 = new Player ();
  let newPlayer2 =new Player ();
  let newPlayerName = new Player ();
  ("form#names").submit(function(event) {
    event.preventDefault();
    newPlayerName.namingPlayer();
    ("payer-one-name").text(newPlayerName.nameOne);
    ("player-two-name").text(newPlayerName.nameTwo);
  });
  ("playerOneDice").click(function() {
    newPlayer1.rollDice();
    ("p1-turnscore").text(newPlayer1.turnscore);
  });
  ("p1-hold").click(function() {
    newPlayer1.hold();
    newPlayer1.namingPlayer(); 
    if (newPlayer1.totalScore >= 100) {
      document.remove(".hidden#winner");
      const par = document.createElement("p");
      par.append(newPlayerName.name1);
  } else {
    ("#playerOneDice,#p1-hold ").prop("disabled", true);
    ("playerTwoDice, p2-hold").prop("disabled"), false;
  }
  });
  ("#playerTwoDice").click(function() {
    newPlayer2.rollDice();
    $("#p2-turnscore").text(newPlayer2.turnScore);
  });
  $("#p2-hold").click(function() {
    newPlayer2.hold();
    newPlayerName.namingPlayer();
    if (newPlayer2.totalScore >= 100) {
        document.remove(".hidden#winner");
        const par = document.createElement("p");
        par.append(newPlayerName.name2);
    } else {
      $("#playerTwoDice, #p2-hold").prop("disabled", true);
      $("#playerOneDice, #p1-hold").prop("disabled", false);
    }
  });
}