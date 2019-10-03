// The solution of Homework Week#1 - Day#4
// ABDULMAJED DHELAIMI
//Q1- Create a function that will get the sum of the numbers between 1 and n and return the answer
function summation(x){
    if(!x){
      return 0;
    }
    return x + summation(x-1);
  }
  console.log(summation(5)) // should return 15 because 1+2+3+4+5=15

//Q2- Create a program to get the sum of all the even numbers in a group
function summationEven(x) {
    if(x < 0){
      return 0;
    }
    return !(x % 2) ? x + summationEven(x - 2): 0 + summationEven(x-1);
  }
  console.log(summationEven(5)) // should return 6 because 2+4=6

//Q3- Create a function to get the average of a group of numbers
function avg(arr){
    let result = 0
    for(i in arr){
      result += arr[i];
    }
    return result / arr.length
  }
  console.log(avg([8, 2, 2, 4])) // should return 4

//Q4- Create a function to reverse the letters in a word
function reverse(arr){
    let toReturn = new Array(arr.length-1);
    for(let i = 0; i < arr.length/2; ++i){
      toReturn[arr.length-i] = arr[i];
      toReturn[i] = arr[arr.length-i];
    }
    return toReturn.join("");
  }
  console.log(reverse("caterpillar")) // should return "rallipretac"

//Q5- Create a function that takes an array of words and combines them with a dash
function addDashes(arr){
    return arr.join("-")
  }
  console.log(addDashes(['test1', 'test2', 'test3'])) // should return "test1-test2-test3"

//Q6- Function that will count up to a number and back down and return a string of the climb
function countUpAndDown(x){
    let toReturn = [];
    for(let i = 0; i < x; ++i){
      toReturn.push(i+1);
    }
    for(let i = x-1; i > 0; --i){
        toReturn.push(i);
    }
    return toReturn.join(" ");
  }
  console.log(countUpAndDown(3)) // should return "1 2 3 2 1"

//Q7- Write a function that will tell you all of the words in an array that contain the letter `a`
function wordsWithA(arr){
    let toReturn = []
    for(i in arr){
      if(arr[i].indexOf('a') !== -1){
        toReturn.push(arr[i]);
      }
    }
    return toReturn 
  }
  console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog'])) // should return ['cat', 'rabbit']

//Q8- Write a function that will tell you all of the words in an array that contain a specified letter
function wordsWithLetter(letter, arr){
    let toReturn = []
    for(i in arr){
      if(arr[i].indexOf(letter) !== -1){
        toReturn.push(arr[i]);
      }
    }
    return toReturn 
  }
  console.log(wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])) // should return ['dog', 'frog']

//Q9- Function that returns the longest word in sentence
function longestWord(arr) {
    let longest = "";
    arr = arr.split(" ");
    for(i in arr){
      if(longest.length < arr[i].length){
        longest = arr[i];
      }
    }
    return longest;
  }
  console.log(longestWord("The cat in the house")) // should return "house"

//Q10- Function that returns the largest even number
function largestEvenNumber(arr){
    let maxEven = 0;
    for(i in arr){
      let evenValue = !(arr[i] % 2) ? arr[i] : maxEven
      maxEven = maxEven < evenValue ? evenValue : maxEven 
    }
    return maxEven
  }
  console.log(largestEvenNumber([1,2,3,10,4,7,0])) // should return "10"