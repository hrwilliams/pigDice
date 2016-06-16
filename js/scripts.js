//  Front End logic

$(document).ready(function()  {
  var turnScore;
  var player1_name;
  var player2_name;
  $("#player2").hide();
  $("#displayDice").hide();
  $("#displayDice2").hide();
  $('#playersModal').modal('show');
  $("#player1-name").hide();
  $("#player2-name").hide();
  $("#submit-names").hide();
  $("#submit-play-type").click(function() {
    var playerMode = parseInt($("input:radio[name='optradio']:checked").val());
    $("#hideRadioList").hide();
    if (playerMode === 1)  {
      $("#player1-name").show();
      $("#player2-name").show();
      $("#submit-names").show();
    }
    else {
      $("#player1-name").show();
      $("#submit-names").show();
    }
    event.preventDefault();
  })
  $("#submit-names").click(function() {
    player1_name = $("#player1-nameval").val().toUpperCase();
    player2_name = $("#player2-nameval").val().toUpperCase();
    event.preventDefault();
    var player1 = new PlayerScore(player1_name,0);
    var player2 = new PlayerScore(player2_name,0);
    $(".displayPlayer1Name").text(player1.player);
    $(".displayPlayer2Name").text(player2.player);
    var roll;
    turnScore = 0;
    $("#rollDice").click(function() {
      roll = getRandomIntInclusive(1,6);
      toggleDie(roll);
      if (roll === 1) {
        $(".turnScore").text(turnScore);
        $("#totalScore").text(player1.totalScore);
        alert("end of turn");
        $("#player1").hide();
        $("#player2").show();
        if (player2.totalScore != 0) {
          $("#totalScore2").text(player2.totalScore);
        }
        turnScore = 0;
      }
      else {
        turnScore += roll;
        $(".turnScore").text(turnScore);
      }
    });
    $("#hold").click(function(){
      player1.endOfTurn(turnScore);
      $(".turnScore").text(turnScore);
      $("#totalScore").text(player1.totalScore);
      if (player1.totalScore >= 100) {
        alert("You won!");
        player1.totalScore = 0;
        player2.totalScore = 0;
        $("#totalScore").text("");
        $("#totalScore2").text("");

      }
      $("#blankDice").show();
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
        $(".turnScore").text(turnScore2);
        $("#totalScore2").text(player2.totalScore);
        alert("End of turn");
        $(".turnScore").text("");
        $("#player1").show();
        $("#player2").hide();
        if (player1.totalScore != 0) {
            $("#totalScore").text(player1.totalScore);
        }
        turnScore2 = 0;
      }
      else {
        turnScore2 += roll;
        $(".turnScore").text(turnScore2);
      }
    });
    $("#hold2").click(function(){
      player2.endOfTurn(turnScore2);
      $(".turnScore").text(turnScore2);
      $("#totalScore2").text(player2.totalScore);
      if (player2.totalScore >= 100) {
        alert("You won!");
        player1.totalScore = 0;
        player2.totalScore = 0;
        $("#totalScore").text("");
        $("#totalScore2").text("");
      }
      $(".turnScore").text("");
      $("#2blankDice").show();
      $("#player1").show();
      $("#player2").hide();
      if (player1.totalScore != 0) {
          $("#totalScore").text(player1.totalScore);
        }
      turnScore2 = 0;
    });
  });
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
  var arrayOfDice = ["#displayDice2","#side1","#side2","#side3","#side4","#side5","#side6","#blankDice"]
  arrayOfDice.forEach(function(array)  {
    $(array).hide();
  })
  if (true) {
    var i = roll;
    $("#displayDice").show();
    $(arrayOfDice[i]).show();
  }
}
var toggleDie2 = function(roll)  {
  var arrayOfDice = ["#displayDice","#2side1","#2side2","#2side3","#2side4","#2side5","#2side6","#2blankDice"]
  arrayOfDice.forEach(function(array)  {
    $(array).hide();
  })
  if (true) {
    var i = roll;
    $("#displayDice2").show();
    $(arrayOfDice[i]).show();
  }
}
