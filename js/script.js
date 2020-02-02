// Dice with 6 sides chooses random

const dice = {
    sides: 6,
    roll: function () {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

// Print Number Dice to dice DOM

function printNumber(number) {

    let diceOne = document.getElementById('diceOne');
    diceOne.innerHTML = number;

    let diceTwo = document.getElementById('diceTwo');
    diceTwo.innerHTML = number;

    let diceThree = document.getElementById('diceThree');
    diceThree.innerHTML = number;
}


// Click Button to see result

button.onclick = function () {
    let result = dice.roll();
    printNumber(result);
};


// Reset button

document.getElementById("reset").onclick = function () {
    document.getElementById("diceOne").innerHTML = "";
    document.getElementById("diceTwo").innerHTML = "";
    document.getElementById("diceThree").innerHTML = "";
};
