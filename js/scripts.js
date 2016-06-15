//  Front End logic
var turnScore;
$(document).ready(function()  {
  $("#player2").hide();
  var player1 = new PlayerScore("player1",0);
  var player2 = new PlayerScore("player2",0);
  var roll;
  var turnScore = 0;
  $("#rollDice").click(function() {
    roll = getRandomIntInclusive(1,6);
    $("#displayDice").text(roll);
    if (roll === 1) {
      $("#turnScore").text(turnScore);
      $("#totalScore").text(player1.totalScore);
      alert("end of turn");
      $("#displayDice2").text("");
      $("#turnScore2").text("");
      $("#player1").hide();
      $("#player2").show();
      if (player2.totalScore != 0) {
          $("#totalScore2").text(player2.totalScore);
      }
      turnScore = 0;
    }

    else {
      turnScore += roll;
      $("#turnScore").text(turnScore);
    }
  });
  $("#hold").click(function(){
    player1.endOfTurn(turnScore);
    $("#turnScore").text(turnScore);
    $("#totalScore").text(player1.totalScore);
    if (player1.totalScore >= 100) {
      alert("You won!");
      player1.totalScore = 0;
      player2.totalScore = 0;
      $("#totalScore").text("");
      $("#totalScore2").text("");

    }
    $("#displayDice2").text("");
    $("#turnScore2").text("");
    $("#player1").hide();
    $("#player2").show();
    if (player2.totalScore != 0) {
        $("#totalScore2").text(player2.totalScore);
    }

    turnScore = 0;
  })
  var turnScore2 = 0;
  $("#rollDice2").click(function() {
    roll = getRandomIntInclusive(1,6);
    $("#displayDice2").text(roll);
    if (roll === 1) {
      $("#turnScore2").text(turnScore2);
      $("#totalScore2").text(player2.totalScore);
      alert("end of turn");
      $("#displayDice").text("");
      $("#turnScore").text("");
      $("#player1").show();
      $("#player2").hide();
      if (player1.totalScore != 0) {
          $("#totalScore").text(player1.totalScore);
      }
      turnScore2 = 0;
    }
    else {
      turnScore2 += roll;
      $("#turnScore2").text(turnScore2);
    }
  });
  $("#hold2").click(function(){
    player2.endOfTurn(turnScore2);
    $("#turnScore2").text(turnScore2);
    $("#totalScore2").text(player2.totalScore);
    if (player2.totalScore >= 100) {
      alert("You won!");
      player1.totalScore = 0;
      player2.totalScore = 0;
      $("#totalScore").text("");
      $("#totalScore2").text("");
    }
    $("#displayDice").text("");
    $("#turnScore").text("");
    $("#player1").show();
    $("#player2").hide();
    if (player1.totalScore != 0) {
        $("#totalScore").text(player1.totalScore);
      }
    turnScore2 = 0;
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
