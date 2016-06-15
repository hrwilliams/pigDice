//  Front End logic
var turnScore;
var diceArray = [];
$(document).ready(function()  {
  $("#player2").hide();
  $("#displayDice").hide();
  $("#displayDice2").hide();
  var player1 = new PlayerScore("player1",0);
  var player2 = new PlayerScore("player2",0);
  var roll;
  var turnScore = 0;
  $("#rollDice").click(function() {
    roll = getRandomIntInclusive(1,6);
    toggleDie(roll);
    if (roll === 1) {
      $("#turnScore").text(turnScore);
      $("#totalScore").text(player1.totalScore);
      alert("end of turn");
      // $("#displayDice2").text("");
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
    // $("#displayDice2").text("");
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
    toggleDie2(roll);
    if (roll === 1) {
      $("#turnScore2").text(turnScore2);
      $("#totalScore2").text(player2.totalScore);
      alert("End of turn");
      // $("#displayDice").text("");
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
    // $("#displayDice").text("");
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

var toggleDie = function(roll)  {
  if (roll === 1) {
    $("#displayDice").show();
    $("#side6").hide();
    $("#side2").hide();
    $("#side3").hide();
    $("#side4").hide();
    $("#side5").hide();
    $("#displayDice2").hide();
    $("#side1").show();
  }
  else if (roll === 2) {
    $("#displayDice").show();
    $("#side1").hide();
    $("#side6").hide();
    $("#side3").hide();
    $("#side4").hide();
    $("#side5").hide();
    $("#displayDice2").hide();
    $("#side2").show();
  }
  else if (roll === 3) {
    $("#displayDice").show();
    $("#side1").hide();
    $("#side2").hide();
    $("#side6").hide();
    $("#side4").hide();
    $("#side5").hide();
    $("#displayDice2").hide();
    $("#side3").show();
  }
  else if (roll === 4) {
    $("#displayDice").show();
    $("#side1").hide();
    $("#side2").hide();
    $("#side3").hide();
    $("#side6").hide();
    $("#side5").hide();
    $("#displayDice2").hide();
    $("#side4").show();
  }
  else if (roll === 5) {
    $("#displayDice").show();
    $("#side1").hide();
    $("#side2").hide();
    $("#side3").hide();
    $("#side4").hide();
    $("#side6").hide();
    $("#displayDice2").hide();
    $("#side5").show();
  }
  else if (roll === 6) {
    $("#displayDice").show();
    $("#side1").hide();
    $("#side2").hide();
    $("#side3").hide();
    $("#side4").hide();
    $("#side5").hide();
    $("#displayDice2").hide();
    $("#side6").show();
  }
}
var toggleDie2 = function(roll)  {
  if (roll === 1) {
    $("#displayDice2").show();
    $("#2side6").hide();
    $("#2side2").hide();
    $("#2side3").hide();
    $("#2side4").hide();
    $("#2side5").hide();
    $("#displayDice").hide();
    $("#2side1").show();
  }
  else if (roll === 2) {
    $("#displayDice2").show();
    $("#2side1").hide();
    $("#2side6").hide();
    $("#2side3").hide();
    $("#2side4").hide();
    $("#2side5").hide();
    $("#displayDice").hide();
    $("#2side2").show();
  }
  else if (roll === 3) {
    $("#displayDice2").show();
    $("#2side1").hide();
    $("#2side2").hide();
    $("#2side6").hide();
    $("#2side4").hide();
    $("#2side5").hide();
    $("#displayDice").hide();
    $("#2side3").show();
  }
  else if (roll === 4) {
    $("#displayDice2").show();
    $("#2side1").hide();
    $("#2side2").hide();
    $("#2side3").hide();
    $("#2side6").hide();
    $("#2side5").hide();
    $("#displayDice").hide();
    $("#2side4").show();
  }
  else if (roll === 5) {
    $("#displayDice2").show();
    $("#2side1").hide();
    $("#2side2").hide();
    $("#2side3").hide();
    $("#2side4").hide();
    $("#2side6").hide();
    $("#displayDice").hide();
    $("#2side5").show();
  }
  else if (roll === 6) {
    $("#displayDice2").show();
    $("#2side1").hide();
    $("#2side2").hide();
    $("#2side3").hide();
    $("#2side4").hide();
    $("#2side5").hide();
    $("#displayDice").hide();
    $("#2side6").show();
  }
}
