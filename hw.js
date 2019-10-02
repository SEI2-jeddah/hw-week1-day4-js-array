///1.summation()///

function summation(num) {
    let sum = 0
    while (num > 0) {
        sum += num
        num -= 1
    }
    return sum
}

console.log(summation(5))
///////////////////////////////////

///2.summationEven()///
function summationEven(num) {
    let sum = 0
    while (num > 0) {
        if (num % 2 == 0) {
            sum += num
        }
        num -= 1
    }
    return sum
}

console.log(summationEven(5))
///////////////////////////////////

///3.avg([8, 2, 2, 4]) ///
function avg(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

console.log(avg([8, 2, 2, 4]))
///////////////////////////////////

///4.reverse("caterpillar")///
function reverse(word) {

    let reversedWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word.charAt(i)
    }
    return reversedWord
}
console.log(reverse("caterpillar"))
///////////////////////////////////

///5.addDashes()///
function addDashes(array) {
    let dashedArray = ""
    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            dashedArray += array[i]
        } else {
            dashedArray += array[i] + "-"
        }
    }
    return dashedArray
}
console.log(addDashes(['test1', 'test2', 'test3']))
///////////////////////////////////

///6.countUpAndDown()///
function countUpAndDown(num) {
    let numClimb = ""
    for (let i = 1; i < num; i++) {
        numClimb += i + " "
    }
    for (let i = num; i > 0; i--) {
        numClimb += i + " "
    }
    return numClimb
}
console.log(countUpAndDown(3))
///////////////////////////////////

///7.wordsWithA()///
function wordsWithA(array) {
    let tempArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes('a')) {
            tempArray.push(array[i])
        }
    }
    return tempArray
}
console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']))
///////////////////////////////////

///8.wordsWithLetter()///
function wordsWithLetter(letter, array) {
    let tempArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(letter)) {
            tempArray.push(array[i])
        }
    }
    return tempArray
}
console.log(wordsWithLetter('g', ['cat', 'rabbit', 'dog', 'frog']))
///////////////////////////////////

///9.longestWord()///
function longestWord(string) {
    let tempArray = string.split(" ")
    let longestWord = tempArray[0]
    for (let i = 0; i < tempArray.length; i++) {
        if (longestWord.length < tempArray[i].length) {
            longestWord = tempArray[i]
        }
    }
    return longestWord
}
console.log(longestWord("The cat in the house"))

///////////////////////////////////

///10.largestEvenNumber()///
function largestEvenNumber(array) {
    let largestEvenNumber = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && largestEvenNumber == -1) {
            largestEvenNumber = array[i]
        }
        if (largestEvenNumber < array[i]) {
            largestEvenNumber = array[i]
        }
    }
    return largestEvenNumber
}
console.log(largestEvenNumber([1, 2, 3, 10, 4, 7, 0]))
///////////////////////////////////
