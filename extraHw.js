const wordLetters = ['G', 'O', 'A', 'T'];
var guessedLetters = ['_', '_', '_', '_'];
var chances = 6

var ttt = ".....▀▀....."
console.log(ttt + ttt + ttt + ttt + ttt)
console.log("Welcome to Hangman")
console.log("\nYou need to guess the right " + wordLetters.length + " letters word")
console.log("\nYou have " + chances + " chances, if you guessed incorrecly " + chances + " times you'll lose :(")
console.log("\n")

function guessLetter(letter) {
    if (chances != 0) {
        let flag = false

        for (let i = 0; i < wordLetters.length; i++) {
            if (letter == wordLetters[i]) {
                guessedLetters[i] = letter
                flag = true
            }
        }
        let guessedLetString = guessedLetters.toString().replace(/,/g, ' ')
        if (flag == true) {
            if (!guessedLetters.includes("_")) {
                console.log("You Win, " + guessedLetString)
                console.log(ttt + ttt + ttt + ttt + ttt)
            } else {
                console.log("Correct, " + guessedLetString)
            }
        } else {
            console.log("Incorrect, " + guessedLetString)
            chances -= 1
        }
    } else {
        console.log("Sorry You've lose!")
        console.log("  ____")
        console.log("  |    | ")
        console.log("  |    o  ")
        console.log("  |   /|\\")
        console.log("  |    |")
        console.log("  |   / \\")
        console.log(" _|_")
        console.log(ttt + ttt + ttt + ttt + ttt)
    }

}


// losing scenario
/*guessLetter('b');
guessLetter('b');
guessLetter('b');
guessLetter('b');
guessLetter('b');
guessLetter('b');
guessLetter('b');*/

//winning scenario
guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('L');
guessLetter('T'); 
