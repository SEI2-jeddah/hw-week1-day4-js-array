// n! = n * (n - 1) * (n - 2) * ...*1

// summation(5) // should return 15 because 1+2+3+4+5=15

function summation(x) 
{ 
  if (x === 0)
 {
    return 0 ;
 }
  return x + summation(x-1);      
}
console.log(summation(6));


// Create a program to get the sum of all the even numbers in a group
// summationEven(5) // should return 6 because 2+4=6
function summationEven(x) 
{ 
  var temp = 0
 while(x>0){
if(x%2==0){
   temp+=x
}
x-- 
 } 
 return temp
 }
console.log(summationEven(6));


// Create a function to get the average of a group of numbers
// avg([8, 2, 2, 4]) // should return 4
   
var avg = ([8, 2, 2, 4])
function avrg(array){
 let result = 0
for(i=0;i<avg.length;i++)
{
result += (avg.length)
}
result=result/avg.length
 return result
}
console.log(avrg(avg))


// ceate a function to reverse the letters in a word
// reverse("caterpillar") // should return "rallipretac"

var wordReverse = "caterpillar"
function reverse(wordReverse){
   wordReverse = wordReverse.split("")
   wordReverse.reverse();
return wordReverse.join("", wordReverse);
}
console.log(reverse(wordReverse))


// Create a function that takes an array of words and combines them with a dash
// addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

var word1 = ['test1', 'test2', 'test3']
function addDashes(word1){
 //word = word.toString()
  word1=  word1.join('-',word1);
  return word1
}
console.log(addDashes(word1))


// Function that will count up to a number and back down and return a string of the climb
// countUpAndDown(3) // should return "1 2 3 2 1"


function countUpAndDown(num){
   for(i=1;i<=num;i++){
    console.log(i)
   }
     for(j=num-1;j>=1;j--){
       if(j>0){
        console.log(j) 
       }
   }
   }
   countUpAndDown(3)



//    Write a function that will tell you all of the words in an array that contain the letter `a`
// wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

var arr = ['cat', 'rabbit', 'dog', 'frog']
function wordsWithA(arr){
for(i=0;i<arr.length;i++){
   for(j=0;j<arr.length;j++){
    if(arr[i][j]=="a"){
console.log(arr[i])
    }
}
}
}
wordsWithA(arr)



// Write a function that will tell you all of the words in an array that contain a specified letter
// wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']


//var arr = ['cat', 'rabbit', 'dog', 'frog']
function wordsWithLetter(ch,arr){
for(i=0;i<arr.length;i++){
   for(j=0;j<arr.length;j++){
    if(arr[i][j]==ch){
console.log(arr[i])
    }
}
}
}
wordsWithLetter("g",arr)


// Function that returns the longest word in sentence
// longestWord("The cat in the house") // should return "house"
 

var word = "The cat in the house"
 word = word.split(" ")
 function longestWord(word){
   var result = ""
  for(i=0;i<word.length;i++){
    if(word[i].length>result.length){
      result=word[i]
    }
  } return result 
   
 }

 console.log(longestWord(word))




// Function that returns the longest word in sentence
// longestWord("The cat in the house") // should return "house"

var array = [1,2,3,10,4,7,0]
function largestEvenNumber(array){
var largest =0
for(i=0;i<array.length;i++){
if(array[i]%2==0){
if(largest<array[i])
{
  largest = array[i]
}
}
}
return largest
}

console.log(largestEvenNumber([1,2,3,10,4,7,0]))
