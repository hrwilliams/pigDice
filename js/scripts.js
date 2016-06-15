//  Front End logic
var turnScore;
$(document).ready(function()  {
  var player1 = new PlayerScore("player",0);
  var roll;
  var turnScore = 0;
  $("#rollDice").click(function() {
    roll = getRandomIntInclusive(1,6);
    $("#displayDice").text(roll);
    if (roll === 1) {
      turnScore = 0;
      $("#turnScore").text(turnScore);
      alert("end of turn");
    }
    else {
      turnScore += roll;
      $("#turnScore").text(turnScore);
    }
  });
  $("#hold").click(function(){
    player1.endOfTurn(turnScore);
    turnScore = 0;
    $("#turnScore").text(turnScore);
    alert(player1.totalScore);
  })
})

// Back End logic
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function PlayerScore (player, totalScore) {
  this.player = player;
  this.totalScore = totalScore;
}

PlayerScore.prototype.endOfTurn = function(score) {
  return this.totalScore = this.totalScore + score;
}
