var firstCard;
var secondCard;
var sum;
var message;
var messageEl;
var isAlive;
var hasBlackJack;

function startGame() {
    resetGame();
    firstCard = Math.floor((Math.random() * 10) + 2);
    secondCard = Math.floor((Math.random() * 10) + 2);
    sum = firstCard + secondCard;

    messageEl = document.getElementById("message-el");
    document.querySelector("#cards-el").textContent = "Cards: " + firstCard + " " + secondCard;
    document.querySelector("#sum-el").textContent = "Sum: " + sum;

    checkSum();

    messageEl.textContent = message;
}

function newCard()
{
    let newCard = Math.floor((Math.random() * 10) + 2);
    sum += newCard;

    document.querySelector("#cards-el").textContent += " " + newCard;
    document.querySelector("#sum-el").textContent = "Sum: " + sum;

    checkSum();
    messageEl.textContent = message;
}

function checkSum(s)
{
    switch (true) {
        case sum < 21:
            message = "Draw?";
            break;
        case sum == 21:
            message = "Blackjack!";
            gameOver();
            break;
        case sum > 21:
            message = "Bust!";
            gameOver();
            break;
    }
}

function gameOver()
{
    document.getElementById("btn-new-card").style.color = "white";
    document.getElementById("btn-new-card").style.backgroundColor = "grey";
    document.querySelector("#btn-new-card").disabled = true;
}

function resetGame()
{
    document.getElementById("btn-new-card").style.color = "#016f32";
    document.getElementById("btn-new-card").style.backgroundColor = "goldenrod";
    document.querySelector("#btn-new-card").disabled = false;
}




/* console.log(firstCard);
console.log(secondCard);
console.log(sum);
console.log(message); */


