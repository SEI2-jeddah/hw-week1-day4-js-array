//1.Create a function that will get the sum of the numbers between 1 and n and return the answer 

function summation(num) {

    console.log(num * (num + 1) / 2);
}
summation(5);

//2.Create a program to get the sum of all the even numbers in a group

function summationEven(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) 
    {
        if (i % 2 === 0) 
        {
            sum += i;
        }
    }
    console.log(sum);
}
summationEven(5);

//3.Create a function to get the average of a group of numbers

function avg(arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        sum += arr[i]
    }
    avg = sum/arr.length;
    console.log(avg);
}
avg([8, 2, 2, 4]);

//4.Create a function to reverse the letters in a word

function reverse(str) {

    let rvrs =""
    
    for (let i = str.length ; i >= 0; i--) {
 
        rvrs += str.charAt(i);
    }
    console.log(rvrs);
}
reverse("caterpillar");

//5.Create a function that takes an array of words and combines them with a dash

function addDashes(arr) {
let dashedString = arr[0]
for (let i = 1; i < arr.length; i++) {

    // dashedString = dashedString + "-" + arr[i]
    dashedString = dashedString + "-" + arr[i]

}
console.log(dashedString);
}
addDashes(['test1', 'test2', 'test3']);

//6.Function that will count up to a number and back down and return a string of the climb

function countUpAndDown(num) {
   let camelNum = '';
    for (let i = 1; i < num; i++) {
        camelNum = camelNum + i.toString() + ' ';        
    }
    for (let i = num; i >0 ; i--) {
        camelNum = camelNum + i.toString() + ' ';        
    }
     console.log(camelNum);
  }
 
  countUpAndDown(3);

//7.Write a function that will tell you all of the words in an array that contain the letter `a`

function wordsWithA(arr) {
    let newArr =[]
    for (let i = 0; i < arr.length; i++) {  
        if(arr[i].indexOf("a") > 0)
        {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

wordsWithA(['cat', 'rabbit', 'dog', 'frog','dragon']);

//8.Write a function that will tell you all of the words in an array that contain a specified letter

function wordsWithLetter(letter,arr) {
    
    let newArr =[]
    for (let i = 0; i < arr.length; i++) {  
        if(arr[i].indexOf(letter) > 0)
        {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog','dragon']);

//9.Function that returns the longest word in sentence

function longestWord(str) {
    let longest = "";
    let splittedArr = str.split(' ');
    for(var i = 0; i < splittedArr.length; i++)
    {
        if(splittedArr[i].length > longest.length)
        { 
        longest = splittedArr[i]; 
        }
      } 
      console.log(longest);
}
longestWord("The cat in the house");

//10.Function that returns the largest even number
function largestEvenNumber(arr) {

    let largest = 0
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i]>largest && arr[i]%2 === 0)
        { 
        largest = arr[i]; 
        }
      } 
      console.log(largest);
    
}

largestEvenNumber([1,2,3,10,4,7,0]);

//Extra practice : Guessed letter Game
const wordLetters = ['G', 'O', 'A', 'T'];
var guessedLetters = ['_', '_', '_', '_']; //changed from const so i can place the guessed letter
function guessLetter(letter) 
{
for (let i = 0; i < wordLetters.length; i++) 
{
    if(letter === wordLetters[i])
    {
        guessedLetters[i] = wordLetters[i];
        console.log("Correct , keep going  "+guessedLetters);
    }  
    
}


    
    
}
guessLetter('G');
guessLetter('I'); 
guessLetter('O'); 
guessLetter('A'); 
guessLetter('L'); 
guessLetter('T'); 
