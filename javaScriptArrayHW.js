//shahad's HomeWorks
//..1
function summation(num) {
    let sum = 0
    for (var i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}
console.log(summation(5))

//..2
function summationEven(num) {
    let sum = 0
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    return sum
}
console.log(summationEven(5));

//..3
function avg(arrayNumbers) {
    let sum = 0
    for (var i = 0; i < arrayNumbers.length; i++) {
        sum += arrayNumbers[i]
    }
    return sum / arrayNumbers.length
}
console.log(avg([8, 2, 2, 4]));

//..4
function reverse(string) {
    let newArray = []
    for (var i = string.length - 1; i >= 0; i--) {
        newArray.push(string[i])
    }
    return newArray.join("")
}
console.log(reverse("caterpillar"));

//..5
function addDashes(array) {
    let string = ""
    for (var i = 0; i < array.length; i++) {
        string += array[i]
        if (i != array.length - 1) {
            string += "-"
        }
    }
    return string
}
console.log(addDashes(['test1', 'test2', 'test3', 'test4']))

//..6
function countUpAndDown(num) {
    let countUp = ''
    let countDown = ''
    for (var i = 1; i <= num; i++) {
        countUp += i + ' '
    }
    for (var j = i - 2; j > 0; j--) {
        countDown += j + ' '
    }
    return countUp + countDown
}
console.log(countUpAndDown(3))

//..7
function wordsWithA(array) {
    let wordsWithA = []
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] === 'a') {
                wordsWithA.push(array[i])
            }
        }
    }
    return wordsWithA
}
console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']));

//..8
function wordsWithLetter(letter, array) {
    let wordsWithLetter = []
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] === letter) {
                wordsWithLetter.push(array[i])
            }
        }
    }
    return wordsWithLetter
}
console.log(wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']));

//..9
function longestWord(string) {
    let str = string.split(" ")
    let count = 0
    let longestWord = 0

    for (var i = 0; i < str.length; i++) {

        if (str[i].length > count) {
            count = str[i].length
            longestWord = str[i]
        }
    }
    return longestWord
}
console.log(longestWord("The cat in the house"));

//..10
function largestEvenNumber(array) {
    let result = 0
    let largestEvenNumber = 0
    for (var i = 0; i < array.length; i++) {
        largestEvenNumber = array[i]
        if (largestEvenNumber % 2 == 0) {
            if (largestEvenNumber > result) {
                result = largestEvenNumber
            }
        }
    }
    return result
}
console.log(largestEvenNumber([1, 2, 3, 10, 4, 7, 0]));

//..Extra Practice

// start of the game
const wordLetters = ['F', 'O', 'X'];
const guessedLetters = ['_', '_', '_'];

function guessLetter(guessedLetter) {
    let index
    let statment
    for (var i = 0; i < wordLetters.length; i++) {

        if (guessedLetters.indexOf(guessedLetter) > -1) {
            return "Already guessed, " + guessedLetters.join(" ")
        } else if (guessedLetter === wordLetters[i]) {
            index = wordLetters.indexOf(guessedLetter)
            guessedLetters.splice(index, 1, guessedLetter)
            if (guessedLetters.indexOf("_") != -1) {
                return "Correct, " + guessedLetters.join(" ")
            } else {
                return "You Win, " + guessedLetters.join(" ")
            }
        }

    }
    return "Incorrect, " + guessedLetters.join(" ")
}
// playing the game
console.log(guessLetter('O'))
console.log(guessLetter('Q')); 
console.log(guessLetter('F'));                                
console.log(guessLetter('O')); 
console.log(guessLetter('E')); 
console.log(guessLetter('F')); 
console.log(guessLetter('X')); 