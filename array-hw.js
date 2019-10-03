function summation(num) {
    var numbers = [1, 2, 3, 4, 5] // sums to 15
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    return  sum;
    }

    console.log(summation(5));

    *//////////////////////////////////*

    function summationEven(num) {
        var number = [2,4] // should return 6
    var sum = 0;
for(var i = 0; i< numbers.length; i++) {
if(i % 2 === 0) {
sum = sum + i;
}
}
return sum;
}
console.log(summationEven(2, 4));


*///////////////////////////////////////////*


function arrayAverage(arr){
    avg([8, 2, 2, 4]) // should return 4
    var sum = 0;
    for(var i in arr) {
        sum += arr[i];
    }
    
    var numbersCnt = arr.length;
    
    return (sum / numbersCnt);
}
console.log([4], 2, 8);


//////////////////////////////////////////*

function reverseString(str) {
    var splitString = str.split(""); //// var splitString = "caterpillar".split("");
    var reverseArray = splitString.reverse(); // var reverseArray =["c","a","t","e","r","p","i","l","l","a","r"]
    var joinArray = reverseArray.join("");

    return str.split("").reverse().join("");
}
reverseString("caterpillar");


///////////////////////////////////////////*

function addDashes(['test1', 'test2', 'test3']) {
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));


/////////////////////////////////////////////////*

countUpAndDown(3) // should return "1 2 3 2 1"

function countUpAndDown(3)

var counttx = 0, countup = true;

function timerr()
{
  if (countup)
  {
    ++counttx;
    if (counttx >= 3)
      countup = false;
  }
  else
  {
    --counttx;
    if (counttx <= 0)
      countup = true;
  }
}

console.log(countUpAndDown(3));


////////////////////////////////////////////////////////*

 funaction wordsWithA(){
var str = ['cat', 'rabbit', 'dog', 'frog'];
var expr = "/a/";
var result = str.search(expr) > -1;
alert(result);
 }
 console.log('cat', 'rabbit');



//////////////////////////////////////////////////*
function findG(){
var data = ['cat', 'rabbit', 'dog', 'frog'];

var found = data.find(function(element) {
  return element < ('dog',''frog' );
});
}
console.log(found);


//////////////////////////////////////////////////////*


function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;house;
  }
  findLongestWord("The cat in the house");


/////////////////////////////////////////////////////////*

function max_even(arra) {
var = [1,2,3,10,4,7,0]
    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(max_even([1,2,3,10,4,7,0]));