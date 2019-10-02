/// Q1
function summation(num){
var sum=0
for(var i=0; i<=num; i++ ){
  sum+=i
 
}
 console.log(sum)

}

summation(5)


//Q2

function summationEven(num){
   var j=0

for(var i=0; i<num; i++){

  if (i %2==0){
    
     j+=i

  } else {
    
  }


}
       console.log(j)


}

summationEven(5)


///Q3


function avg(array){
var average=0

var arr=array
for (var i=0; i<arr.length; i++){
     average+=arr[i]

}
console.log(average/arr.length)


}


avg([8, 2, 2, 4])


////Q4


  function reverse(str){
   let revstr = "";
   for(let i = str.length-1; i>=0; i--){
       revstr = revstr+ str[i];
    }
    return revstr;
}

reverse("caterpillar")


////Q5



function addDashes(str){
var result = [];
for(let x=0; x<str.length; x++)
  {
  result.push( str[x],'-');


  }
  return result


}

addDashes(['test1', 'test2', 'test3'])

///Q6


function countUpAndDown(num){

  for(var i=0; i<num; i++){
    console.log(num-i)
  }
   for(var i=1; i<=num; i++){
    console.log(i)
  
  }
}

countUpAndDown(3)


////Q7


function wordsWithA(arr){ 
    str=[]; 
    for(let i=0;i<arr.length;i++){ 
        arr[i]=arr[i].toLowerCase(); 
       for(let j=0;j<arr[i].length;j++){ 
           if(arr[i][j]=="a"){ 
               str.push(arr[i]); 
           } 
      } 
   } 
     return str; 
  } 

wordsWithA(['cat', 'rabbit', 'dog', 'frog'])


////Q8

function wordsWithLetter(letter,arr){ 
   str=[]; 
   for(let i=0;i<arr.length;i++){ 
      arr[i]=arr[i].toLowerCase(); 
        for(let j=0;j<arr[i].length;j++){ 
              if(arr[i][j]==letter){ 
                str.push(arr[i]); 
         } 
       } 
    } 
    return str; 
} 

wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])

//// Q9

function longestWord(string){ 
    string=string.split(" "); 
    let longest=string[0]; 
     for(let i=0;i<string.length;i++){ 
         if(string[i].length>longest.length){ 
           longest=string[i]; 
        } 
    } 
    return longest; 
 } 

longestWord("The cat in the house") 

///Q10

function largestEvenNumber(array){ 
     let largest=Number.NEGATIVE_INFINITY; 
     for(let i=0;i<array.length;i++){ 
       if(!(array[i]%2)&&array[i]>largest){ 
           largest=array[i]; 
       } 
    } 
    return largest; 
 } 
largestEvenNumber([1,2,3,10,4,7,0]) 



//// EXTRA Q


var wordLetters     = ['G', 'O', 'A', 'T'];
var guessedLetters  = ['_', '_', '_', '_'];

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
         console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    } 
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');