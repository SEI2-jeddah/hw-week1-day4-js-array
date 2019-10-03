console.log("1:");
// <1>
var summation = function(num){
    var sum = 0
    for(var i = 1 ; i <= num ; i++){
      sum += i;
    }
    return console.log(sum+"\n");
  } 
  summation(5)
  console.log("2:");
//<2>
  var summationEven = function(num){
    var sum = 0
    for(var i = 1 ; i <= num ; i++){
      if(i % 2 === 0){
        sum += i;
      }
    }
    return console.log(sum+"\n");
  } 
  summationEven(5)
  console.log("3:");
//<3>
  var avg = function(arrayOfNumber){
    var sum = 0
    for(var i = 0 ; i < arrayOfNumber.length ; i++){
      sum += arrayOfNumber[i];
    }
    return console.log(sum/arrayOfNumber.length+"\n");
  } 
  avg([8, 2, 2, 4])
  console.log("4:");
//<4>
  var reverse = function(str){
    var strToArry = str.split('')
    const tmpArray = []
    for(var i = strToArry.length-1 ; i >= 0 ; i--){
      tmpArray.push(strToArry[i]);
    }
    return console.log('"'+tmpArray.join('')+'"'+"\n");
  } 
  reverse("caterpillar")
  console.log("5:");
//<5>
  var addDashes = function(arrayOfStrings){
    return console.log('"'+arrayOfStrings.join('-')+'"'+"\n");
  } 
  addDashes(['test1', 'test2', 'test3'])
  console.log("6:");
//<6>
  var countUpAndDown = function(num){
    var sum = ""
    const tmpArray = []
    for(var i = 1 ; i <= num ; i++){
        sum += i + " "
    }
    for(var i = num-1 ; i > 0 ; i--){
        sum += i + " "
    }
    return console.log('"'+sum+'"'+"\n");
  } 
  countUpAndDown(5)
  console.log("7:");
//<7>
  var wordsWithA = function(array){
      var result = []
    for(var i = 0 ; i < array.length ; i++){
        if(array[i].includes('a')){
            result.push(array[i]);
          }
    }
    return console.log(result+"\n");
  } 
  wordsWithA(['cat', 'rabbit', 'dog', 'frog'])
  console.log("8:");
//<8>
var wordsWithLetter = function(letter,array){
    var result = []
  for(var i = 0 ; i < array.length ; i++){
      if(array[i].includes(letter)){
          result.push(array[i]);
        }
  }
  return console.log(result+"\n");
} 
wordsWithLetter('g',['cat', 'rabbit', 'dog', 'frog'])
console.log("9:");
//<9>
  var longestWord = function(str){
    var result = ""
    var strToArray = str.split(' ')
    for(var i = 0 ; i < strToArray.length ; i++){
      if(strToArray[i].length > result.length){
        result = strToArray[i];
      }
    }
    return console.log('"'+result+'"'+"\n");
  } 
  longestWord("The cat in the house")
  console.log("10:");
//<10>
  var largestEvenNumber = function(array){
    var result = 0
    for(var i = 0 ; i < array.length ; i++){
        if(array[i] % 2 === 0){
            if(array[i] > result){
                result = array[i];
            }
        }
    }
    return console.log(result+"\n");
  } 
  largestEvenNumber([1,2,3,10,4,7,0])
  console.log("THE EXTRA PRACTICE: "+"\n");

// Extra Practice

// start of the game
const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];
const tmp = []
var lost = 0
var guessLetter = function(letter){ 
    
    if(lost === 6){
        return console.log("Soryy you lost T.T "+"\n");  
    }else {
        for(var i = 0 ; i < wordLetters.length ; i++){
            if (letter === wordLetters[i]){
                guessedLetters.unshift(letter)
                guessedLetters.pop()
                tmp.push(letter)
                wordLetters.splice(i,1)
                //wordLetters.push('_')
                if(guessedLetters.includes('_') === false ){
                    return console.log("You Win, G O A T"+"\n");
                }
                else{
                    return console.log("Correct:  ["+guessedLetters+"]"+"\n");
                }    
                     
            }else{
                return console.log("Incorrect:  ["+guessedLetters+"] try again\nNumber of try: "+(6-lost)+"\n");    
            }
        }            
    }
}
// playing the game
guessLetter('G') // "Correct, G _ _ _"
guessLetter('G') // "Correct, G _ _ _"
guessLetter('I') // "Incorrect, G _ _ _"
guessLetter('O') // "Correct, G O _ _"
guessLetter('A') // "Correct, G O A _"
guessLetter('L') // "Incorrect, G O A _"
guessLetter('T') // "You Win, G O A T"