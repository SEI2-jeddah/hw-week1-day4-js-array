//Exercise 1
function summation(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
console.log("Exersice 1")
console.log(summation(5));

//Exercise 2

function summationEven(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        if(!(i%2)){
        sum+=i;}
    }
    return sum;
}
console.log("Exersice 2")
console.log(summationEven(5));

//Exercise 3
function avg(arr){
    let result=0;
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result=result/arr.length;
}
console.log("Exersice 3")
console.log(avg([8, 2, 2, 4]));

//Exersice 4
function reverse(word){
let reversedWord="";
for(i=word.length-1;i>=0;i--){
    reversedWord+= word[i]
}
return reversedWord
}
console.log("Exersice 4")
console.log(reverse("caterpillar"));

 //Exersice 5

 function addDashes(arr){
    return arr.join('-');
 }
 console.log("Exersice 5")
 console.log(addDashes(['test1', 'test2', 'test3']));

 //Exercise 6
 function countUpAndDown(num){
    let count=""
    for(let i=1;i<=num;i++){
        count+=i+" "
    }
    for(let i=num-1;i>0;i--){
        count+=i+" "
    }
    return count
 }
 console.log("Exersice 6")
 console.log(countUpAndDown(3));

 //Exercise 7
 function wordsWithA(arr){
     newArr=[];
     for(let i=0;i<arr.length;i++){
         arr[i]=arr[i].toLowerCase();
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]=="a"){
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
 }
 console.log("Exersice 7")
 console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']));

 //Exercise 8
 function wordsWithLetter(letter,arr){
    newArr=[];
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].toLowerCase();
       for(let j=0;j<arr[i].length;j++){
           if(arr[i][j]==letter){
               newArr.push(arr[i]);
           }
       }
   }
   return newArr;
}
console.log("Exersice 8")
console.log(wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']));

//Exercise 9
function longestWord(sentence){
    sentence=sentence.split(" ");
    let longest=sentence[0];
    for(let i=0;i<sentence.length;i++){
        if(sentence[i].length>longest.length){
            longest=sentence[i];
        }
    }
    return longest;
}
console.log("Exersice 9")
console.log(longestWord("The cat in the house"));

//Exercise 10
function largestEvenNumber(arr){
    let largest=Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        if(!(arr[i]%2)&&arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}
console.log("Exersice 10")
console.log(largestEvenNumber([1,2,3,10,4,7,0]));

//Extra Practice
const word= ['G', 'O', 'A', 'T'];
var guessedLetters  = ['_', '_', '_', '_'];
function guessLetter(char){
    char=char.toUpperCase();
    let correct=false;
    let win=false;
    for(let i=0;i<word.length;i++){
        if(char==word[i]){
            guessedLetters[i]=word[i];
            correct=true;
            break;
        }
        else{
            correct=false
        }
    }
    for(let i=0;i<word.length;i++){
        if(guessedLetters[i]=='_'){
            win=false;
            break;
        }
        else{
            win=true
        }
    }
    if(!win){
    correct?console.log("Correct, "+guessedLetters.join(' ')):console.log("Incorrect, "+guessedLetters.join(' '));
    }
    else{
        console.log("You Win, "+guessedLetters.join(' '));
    }
}
console.log("Extra Practice")
guessLetter('G'); // "Correct, G _ _ _"
guessLetter('I'); // "Incorrect, G _ _ _"
guessLetter('O'); // "Correct, G O _ _"
guessLetter('A'); // "Correct, G O A _"
guessLetter('L'); // "Incorrect, G O A _"
guessLetter('T'); // "You Win, G O A T"
