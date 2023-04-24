//Create a function that takes a boolean variable and return if as a string.
//ex: toString(true) -> "true" toString(false) -> "false"



// function toString(str) {
//     return str.toString()
// }
// console.log(typeof(toString(true)))



//create a function for the game rock, paper,scissors
//ex: playGame("Rock", "Paper") -> 'Paper is Winner"


//the fucntion with the choice the each player made
function playGame(opt1, opt2){
    //the if statement to determine the winner
    //the players have to type in Rock, Paper and Scissors exactly or the ifelse statements won't recognise it
    if (opt1 || opt2 == "Rock" && opt2 || opt1 == "Paper") {
        return "Winner is Paper"

    }   else{
        if (opt1 || opt2 == "Paper" && opt2 || opt1 == "Scissors") {
            return "Winner is Scissors"
        }
            else{
                 if (opt1 || opt2 == "Scissors" && opt2 || opt1 == "Rock"){
                    return "Winner is Rock"
             }
    }
}   
   
}

console.log(playGame("Scissors", "Rock"))