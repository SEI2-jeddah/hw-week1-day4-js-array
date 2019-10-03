//Create a function that will get the sum of the numbers between 1 and n and return the answer 
// summation(5) // should return 15 because 1+2+3+4+5=15

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log ( summation(5) );


//Create a program to get the sum of all the even numbers in a group summationEven(5) // should return 6 because 2+4=6


function summationEven(num){
    let n = 0;
    for(var i = 1; i<= num; i++){

        if(i % 2 == 0){
            n += i 
        }
    }
    console.log(n)   
}
summationEven(5)


//Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4

var elem = [8, 2, 2, 4]
function avgNum (arr){
    let result =0;
for ( var i = 0; i < arr.length; i++){
    result += arr[i]
}
console.log( result / i);
   
}
avgNum (elem)



//Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"

function strRev (){
var str = 'caterpillar';
var reverseStr = '';
for(var i = str.length-1; i>= 0; i--)
{
reverseStr += str[i];
}
console.log(reverseStr);
}
strRev ()


//Create a function that takes an array of words and combines them with a dash addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

 function addDashes(array){
     let n = ''
     for(var i = 0; i < array.length; i++){
         if(i == array.length-1){
             n += array[i]
         }else{
             n += array[i] + '-'
         }

     }
     console.log(n)
 }

 addDashes(['test1', 'test2', 'test3'])


 //Function that will count up to a number and back down and return a string of the climb countUpAndDown(3) // should return "1 2 3 2 1

function countUpAndDown(num){
    let n = ''
    for(var i = 1; i <= num; i++){
        n += i
    }
    for(var i = num-1 ; i > 0; i--){
        n += i
    }
    console.log(n);

}
countUpAndDown(3)


 //Function that returns the largest even number largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"


let large = 0;
for(var i= 0; i <array.length ; i++){
    if(array[i]%2==0){
        if (array[i] > large){
            large = array[i] 
        }
    }
}
console.log(large);

}
largestEvenNumber([1,2,3,10,4,7,0])  


// Function that returns the longest word in sentence  longestWord("The cat in the house") // should return "house"


function findLongestWord(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(findLongestWord("The cat in the house"));



let names = ['cat', 'rabbit', 'dog', 'frog'];
   let filterItems = (letters) => {
        return names.filter(name => name.indexOf(letters) > -1);
    } 

    console.log(filterItems('a'));






    let names = ['cat', 'rabbit', 'dog', 'frog'];
   let filterItems = (letters) => {
        return names.filter(name => name.indexOf(letters) > -1);
    } 

    console.log(filterItems('g'));



