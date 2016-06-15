//  Front End logic
$(document).ready(function()  {
  $("#displayDice").text(getRandomIntInclusive(1,6));
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
  return this.totalScore += score;
}
