//Create a function that will get the sum of the numbers between 1 and n and return the answer 
function sumN(num) {
    var sum = 0
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumN(5));

//Create a program to get the sum of all the even numbers in a group 
function sumNEven(num) {
    var sum = 0
    for (i = 1; i <= num; i++) {
        if (i % 2 == 0)
            sum += i
    }
    return sum;
}

console.log(sumNEven(5));

//Create a function to get the average of a group of numbers 
function ave(arr) {
    var sum = 0
    var ave = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    ave = sum / arr.length
    return ave;
}
var arr = [8, 2, 2, 4]
console.log(ave(arr));
//Create a function to reverse the letters in a word 
function reverse(str) {
    str = str.split("");
    let revArr = [];
    for (i = str.length - 1, j = 0; i >= 0 && j < str.length; --i, j++) {
        revArr[j] = str[i]
    }
    revArr = revArr.join("")
    return revArr
}
console.log(reverse("raghad"))
//Create a function that takes an array of words and combines them with a dash 
function addDashed(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i] + "-"
    }
    arr = arr.join("")
    return arr
}
arr = ["Raghad", "Allhyani", "test"]
console.log(addDashed(arr))

//Function that will count up to a number and back down and return a string of the climb 
function countUpAndDown(num) {
    let arr = []
    for (i = 1; i <= num; i++) {
        arr.push(i);
    }
    for (i = num - 1; i >= 1; i--) {
        arr.push(i);


    }
    arr = arr.join("")
    return arr
}
console.log(countUpAndDown(6))

//Write a function that will tell you all of the words in an array that contain the letter `a`
function wordsWithA(arr) {
    for (i = 0; i < arr.length; ++i) {
        var str = arr[i];
        if ((str.lastIndexOf('a')) == -1) {
            arr.splice(i, 1)
            i--//when we delete an element it escape one index 
        }
    }
    return arr
}
var arr = wordsWithA(['cat', 'rabbit', 'dog', 'frog'])
console.log(arr);

//Write a function that will tell you all of the words in an array that contain a specified letter 
function wordsWithLetter(char, arr) {
    var temp = [];
    for (i = 0; i < arr.length; ++i) {
        var str = arr[i];
        if ((str.lastIndexOf(char) != -1)) {
            temp.push(arr[i])
            //when we delete an element it escape one index 
        }
    }
    return temp
}

arr = wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])
console.log(arr);
//Function that returns the longest word in sentence 
function longestWord(str) {
    str = str.split(" ")
    str.sort(function (a, b) {
        return b.length - a.length
    })

    console.log(str[0])
}
longestWord("The cat in the house")

//Function that returns the largest even number 
function largestEvenNumber(arr) {
    let max = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] > max) {
            max = arr[i]

        }
    }
    return max
}
console.log(largestEvenNumber([1, 2, 3, 10, 4, 7, 20]))