function clearErrors() {
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySeven"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySeven"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySeven"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
//~~~~~~~~~~~~~~~//
function resetForm() {
    clearErrors();
    document.forms["luckySeven"]["startingBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("playButton").innerText = "Submit";
    document.forms["luckySeven"]["startingBet"].focus();
}
//~~~~~~~~~~~~~~~~~~~//
function validateItems() {
    clearErrors();
    var startingBet = document.forms["luckySeven"]["startingBet"].value;
    
    if ((startingBet == "" || isNaN(startingBet)) || (startingBet <= 0)) {
        alert("startingBet must be filled in with a positive number.");
        document.forms["luckySeven"]["startingBet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySeven"]["startingBet"].focus();
        return false;
    }
    //paste all the stuff here below:
var gameMoney = parseInt(startingBet);
var firstRoll = 0
var secondRoll = 0
var diceSum = 0
var lsRound = new Array();
lsRound.push (Number(document.forms["luckySeven"]["startingBet"].value));
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function luckySevenRounds() {
firstRoll = rollDice();
secondRoll = rollDice();
diceSum = firstRoll + secondRoll;

if (diceSum == 7){
    gameMoney = gameMoney + 4;
	} else {
    gameMoney = gameMoney - 1;
	}
lsRound.push(gameMoney);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
while (gameMoney > 0) {
luckySevenRounds();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
var maxMoney = Math.max(...lsRound);

    //
   document.getElementById("results").style.display = "block";
   document.getElementById("playButton").innerText = "Recalculate";
   document.getElementById("initialBet").innerText = Number(startingBet);
   document.getElementById("totalRolls").innerText = lsRound.length;
   document.getElementById("highestAmount").innerText = maxMoney;
   document.getElementById("highestRollCount").innerText = lsRound.indexOf(maxMoney); 

   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}