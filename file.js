//part 1
summation = function(){
    let num = [1,2,3,4,5];
    let result = 0;
    for (var i = 0; i < num.length; i++){
        result += num[i];
    }
    return result
    }();

//part 2
summationEven = function(){
    let num = [1,2,3,4,5];
    let result = 0;
    for(var i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            result += num[i];
        }
    }
    return result
 }()

//  part 3


function avg(m,n,o,p){
    let result = 1
    for(var i = 0; i < av.length; i++){
        result += (av[i].length)/ av.length
      }
    return result
    }(8,2,2,4)

    //part 4

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('caterpillar');


//part 5
//part 6
//part 7
//part 8} I didn't get the right answer for part 5-part 6}


//part 9
longestWord = function(){
    let words = ['the','cat','in','the','house'
        ];

    let result = words[0]
    for(var i = 0; i < words.length; i++){
           if (result.length <  words[i].length){
               result = words[i]

           }
           

    }
    return result
}()



//part 10
var num = [1,2,3,10,4,7,0];

function largestEven(arr) {
  var evens = [];
  for (var i = 0; i < arr.length; i++) {
    if(parseInt(arr[i]) % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  var biggestNo = 0;
  for (var j = 0; j < num.length; j++) {
    if(num[j] > biggestNo) {
      biggestNo = num[j];
    }
  }
  return parseInt(biggestNo);
}

largestEven(num)


