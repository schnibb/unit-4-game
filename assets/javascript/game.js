var computerNumber;
var userNumberChoice = [];
var userTotal;
var shownTotal = 0;
var wins = 0;
var losses = 0;
var gameStarted = false;

function computerRandomNumber() {
    computerNumber = Math.floor(Math.random() * 102) + 19;
    $(".computerScore").html("<h3>Computer Score: " + computerNumber + "</h3>");
}

function randomNumbersGenerator() {
    for (var i = 0; i < 4; i++) {
        userNumberChoice[i] = Math.floor(Math.random() * 12) + 1;
    }
}

function numberAssignment() {
    $(".crystalOne").attr("value", userNumberChoice[0]);
    $(".crystalTwo").attr("value", userNumberChoice[1]);
    $(".crystalThree").attr("value", userNumberChoice[2]);
    $(".crystalFour").attr("value", userNumberChoice[3]);
}

function startGame() {
    if (!gameStarted) {
        computerRandomNumber();
        randomNumbersGenerator();
        numberAssignment();
    }
}

function checkScore() {
    if (shownTotal === computerNumber) {
        wins++;
        alert("You Win");
        $(".wins").text("Wins: " + wins);
        resetGame();
    } else if (shownTotal > computerNumber) {
        losses++;
        alert("You Lose");
        $(".losses").text("Losses: " + losses);
        resetGame();
    }
}

function resetGame() {
    userNumberChoice = [];
    shownTotal = 0;
    $(".playerTotal").html("<h3>Your Total is: " + shownTotal + "</h3>");
    gameStarted = false;
    startGame();
    gameStarted = true;
}

$(".cImage").on("click", function() {
    startGame();
    gameStarted = true;
    userTotal = ($(this).attr("value"));
    userTotal = parseInt(userTotal);
    shownTotal += userTotal;
    $(".playerTotal").html("<h3>Your Total is: " + shownTotal + "</h3>");
    checkScore();
});