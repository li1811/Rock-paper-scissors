let playerScore = document.getElementById("playerScore");
let botScore = document.getElementById("botScore");
let result = document.getElementById("result");
/*Above i declare three variables and assign them the value of the html elements. This means i don't have to write document.getElementById("playerScore") over and over again and also makes the code look a lot cleaner.*/

let pScore = 0;
let bScore = 0;
/*The two variables i declare above are used in the background to keep track of the scores. Unlike the two score variables at the top these two are not visible. I could have made this a lot easier but i really wanted display the scores with "|", if i had just used numbers it would have been a lot easier but i was very stubborn.*/




/*The function below is how we get the computer to "choose". I use the Math.random() method to generate a random number. This on it's own will return a random decimal number between 0 and 1. Math.floor() is another method which is used to round down to the nearest whole number. I then multiply this by 3 so that it will return either 0, 1, or 2. By using if statements i can then return either rock, paper, or scissors.*/
function rng () {
    let rndm = Math.floor(Math.random() * 3)
    if (rndm == 0) {
        return  "rock"
    }   else if (rndm == 1) {
        return  "paper"
    }   else if (rndm == 2) {
        return  "scissors"
    }
}




/*This is where the magic happens, i use if statements to compare the players choice to the computers choice and update both the visible and hidden scores.*/
function rps() {
    
    /*Here i declare a variable and assign it the value of the input field. By using the toLowerCase method i can convert the players input to lowercase which makes things a lot easier.*/
    let playerChoice = document.getElementById("playerInput").value.toLowerCase();

    //Here i added a check to make sure the player input is a valid choice.
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        result.textContent = playerChoice + " isn't an option you silly goose!"
    }
    
    
    //I declare a variable and assign it the value of the rng() function.
    let botChoice = rng();
    
    
    /*Using if statements I compare the choices to see who wins the round. I can use the and operator (&&) and the or operator (||) to make several comparisons in one if statement which makes the code a lot more readable. If the choices are the same it's a draw.*/
    if (playerChoice == botChoice) {
        result.textContent = "It's a draw!"
    } else if (playerChoice == "rock" && botChoice == "paper" || playerChoice == "paper" && botChoice == "scissors" || playerChoice == "scissors" && botChoice == "rock") {
        result.textContent = "Computer Wins The Round!" //
        botScore.innerHTML += "|" //With += i add a "|" to the end of the value of botScore.
        bScore++ //This just adds 1 to the value of bScore.
        
    } else if (playerChoice == "rock" && botChoice == "scissors" || playerChoice == "paper" && botChoice == "rock" || playerChoice == "scissors" && botChoice == "paper") {
        result.textContent = "Player Wins The Round!"
        playerScore.innerHTML += "|"
        pScore++
    }


    document.getElementById("playerInput").value = ""; //This resets the input field after every round

     /*With the if statements below i check if anyone has won the game after every round. Once a winner has been declared i reset all the scores and update the result text field to show who won*/
    if (pScore == 3) {
        result.textContent = "Player Wins The Game!"
        playerScore.innerText = "Player Score: "
        botScore.innerText = "Computer Score: "
        pScore = 0
        bScore = 0
    } else if (bScore == 3) {
        result.textContent = "Computer Wins The Game!"
        playerScore.innerText = "Player Score: "
        botScore.innerText = "Computer Score: "
        pScore = 0
        bScore = 0
    }

}


/*and finally I use event listeners to trigger the game whenever the enter key is pressed or if the play button is clicked*/
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        rps();
    }
});

document.getElementById("submit").addEventListener("click", rps);