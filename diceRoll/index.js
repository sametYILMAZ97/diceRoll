

document.getElementById('rollButton').addEventListener('click', GameStart);

function GameStart() {
    const randomDice = GetRandomNumbers();
    const randomDice2 = GetRandomNumbers2();
    console.log("dice1: " + randomDice + "\n" + "dice2: " + randomDice2 + "\n" + "--------");
    document.getElementById('result').innerHTML = "Dice1: " + randomDice + " Dice2: " + randomDice2;
    let imageTag = document.getElementById("diceImage");    
    imageTag.src = "img/dice" + randomDice + ".png";
    let imageTag2 = document.getElementById("diceImage2");
    imageTag2.src = "img/dice" + randomDice2 + ".png";
}

function GetRandomNumbers() {
    return Math.ceil(Math.random()*6);
}

function GetRandomNumbers2() {
    return Math.ceil(Math.random()*6);
}
