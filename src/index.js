//Create a function that takes a boolean variable and return if as a string.
//ex: toString(true) -> "true" toString(false) -> "false"



// function toString(str) {
//     return str.toString()
// }
// console.log(typeof(toString(true)))



//create a function for the game rock, paper,scissors
//ex: playGame("Rock", "Paper") -> 'Paper is Winner"


//the fucntion with the choice the each player made

//the fucntion with the choice the each player made
function playGame(opt1, opt2){
    //the if statement to determine the winner
    //the players have to type in Rock, Paper and Scissors exactly or the else if statements won't recognise it
    if (opt1 === opt2){
        return "Draw"
    }
    //all the different choices to put in both opt
        else if
        (opt1 == "Rock" && opt2 == "Paper") {
        return "Winner is Paper"
            }
        else if
        (opt1 == "Paper" && opt2 == "Rock") {
        return "Winner is Paper"
            } 
        else if
        (opt1 == "Paper" && opt2 == "Scissors") {
            return "Winner is Scissors"
            }
        else if
        (opt1 == "Scissors" && opt2 == "Paper") {
            return "Winner is Scissors"
            }
        else if
        (opt1 == "Scissors" && opt2 == "Rock"){
                return "Winner is Rock"
             } 
        else if
        (opt1 == "Rock" && opt2 == "Scissors"){
                return "Winner is Rock"
                }
}

//to call the function with the strings to find who wins or draws or loses
console.log(playGame("Scissors", "Scissors"))