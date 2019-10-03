//1- Create a function that will get the sum of the numbers between 1 and n and return the answer


function summation(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return console.log(sum);
  }
  summation(5);
  
  //2- Create a program to get the sum of all the even numbers in a group
  
  
  function summationEven(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
    return console.log(sum);
  }
  
  summationEven(5);
  
  //3- Create a function to get the average of a group of numbers
  
  function avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return (sum = sum / arr.length);
  }
  
  console.log(avg([8, 2, 2, 4]));
  
  //4- Create a function to reverse the letters in a word
  
  function reverse(msg) {
    var tmp = "";
    for (var i = msg.length; i >= 0; i--) {
      tmp += msg.charAt(i);
    }
    console.log(tmp);
  }
  
  reverse("caterpillar");
  
  //5- Create a function that takes an array of words and combines them with a dash
  
  function addDashes(arr) {
    var tmp = "";
    for (var i = 0; i <= arr.length - 1; i++) {
      if (arr.length - 1 == i) {
        tmp += arr[i];
      } else {
        tmp += arr[i] + "-";
      }
    }
    console.log(tmp);
  }
  
  addDashes(["test1", "test2", "test3"]);
  
  //6- Function that will count up to a number and back down and return a string of the climb
  
  function countUpAndDown(num) {
    var allNum = "";
    for (var i = 1; i < num; i++) {
      allNum += i + " ";
    }
    for (var i = num; i > 0; i--) {
      allNum += i + " ";
    }
    return console.log(allNum);
  }
  
  countUpAndDown(3);
  
  //7- Write a function that will tell you all of the words in an array that contain the letter `a`
  
  function wordsWithA(arr) {
    var tmp = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].includes("a")) {
        tmp.push(arr[i]);
      }
    }
    console.log(tmp);
  }
  
  wordsWithA(["cat", "rabbit", "dog", "frog"]);
  
  //8- Write a function that will tell you all of the words in an array that contain a specified letter
  
  function wordsWithLetter(letter, arr) {
    var tmp = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].includes(letter)) {
        tmp.push(arr[i]);
      }
    }
    console.log(tmp);
  }
  
  wordsWithLetter("g", ["cat", "rabbit", "dog", "frog"]);
  
  //9- Function that returns the longest word in sentence
  
  function longestWord(msg) {
    var tmp = msg.split(" ");
    var long = tmp[0];
    for (var i = 1; i < tmp.length; i++) {
      if (long.length < tmp[i].length) {
        long = tmp[i];
      }
    }
    console.log(long);
  }
  
  longestWord("The cat in the house");
  
  //10- Function that returns the largest even number
  
  function largestEvenNumber(arr) {
    var large = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (large < arr[i] && arr[i] % 2 == 0) {
        large = arr[i];
      }
    }
    console.log(large);
  }
  
  largestEvenNumber([1, 2, 3, 10, 4, 7, 0, 11]);
  
  //Extra Practice- Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
  
  const wordLetters = ["G", "O", "A", "T"];
  var guessedLetters = ["_", "_", "_", "_"];
  
  function guessLetter(letter) {
    if (wordLetters.includes(letter)) {
      guessedLetters.splice(wordLetters.indexOf(letter),1,letter);
      console.log(guessedLetters);
    } else {
      console.log("Wrong");
    }
  }
  
  guessLetter('G'); // "Correct, G _ _ _"
  guessLetter('I'); // "Incorrect, G _ _ _"
  guessLetter('O'); // "Correct, G O _ _"
  guessLetter('A'); // "Correct, G O A _"
  guessLetter('L'); // "Incorrect, G O A _"
  guessLetter('T'); // "You Win, G O A T"