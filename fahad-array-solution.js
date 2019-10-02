// // Create a function that will get the sum of the numbers between 1 and n and return the answer
// // // summation(5) // should return 15 because 1+2+3+4+5=15
function summation(n) {
    var sum = 0
    for(var i = 0; i <= n - 1; i++){
        sum+= i
    } result = sum + n
    console.log(result)
} summation(5)

//    ///////////////////////////////////////////////
// Create a program to get the sum of all the even numbers in a group
function summationEven(n) {
    var sum = 0
    for(var i = 0; i <= n - 1; i+=2){
        sum+= i
    } console.log(sum)
} summationEven(5)

//    //////////////////////////////////////////////
// //    Create a function to get the average of a group of numbers
function average(arr){
    let sum = 0
    let avr = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    } 
    avr = sum / arr.length
    console.log(avr)
}average([2,4,4,8]);

// ////////////////////////////////////

// // Create a function to reverse the letters in a word
function reverse(word){
    var splitWord = word.split("");
    var reverseWord = splitWord.reverse();
    var joinWordWord = reverseWord.join("");  
    console.log(joinWordWord);  
} reverse("welcome")

// ////////////////////////////////////

// // Create a function that takes an array of words and combines them with a dash
function addDashes(arr) {
    var combines = arr.join("-");
    console.log(combines);
} addDashes(["test1", "test2", "test3"])

// ///////////////////////////////////

// // Function that will count up to a number and back down and return a string of the climb



// /////////////////////////////////
// // Write a function that will tell you all of the words in an array that contain the letter `a`
function wordsWithA(array) {
    var containA = []
    for(var i = 0; i < array.length; i++) {
        if(array[i].includes('a')){
            containA += array[i]
            result = containA.split(' ')
        }
    } console.log(result)

} wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

// /////////////////////////////////
// // Write a function that will tell you all of the words in an array that contain a specified letter
// // wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']

// ////////////////////////////////
// // Function that returns the longest word in sentence
// // longestWord("The cat in the house") // should return "house"
function longestWord(str) {
    var longesWord = str.split(' ')
    var x = 0
     for(var i = 0; i < longesWord.length; i++) {
       if(longesWord[x].length < longesWord[i].length)
       x = i

   }result = longesWord[x]
    console.log(result)
} longestWord("The cat in the house")



// ////////////////////////////////
// // Function that returns the largest even number
// // largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
function largestEvenNumber(arr) {
     var x = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 ==0 && arr[i] > arr[i+1])
        x = arr[i]
    } console.log(x)
} largestEvenNumber([1,2,3,10,4,7,0])
// ////////////////////////////////