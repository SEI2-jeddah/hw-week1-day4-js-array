function summation(n) {
   if(!n){

    return 0;
   }
      return n + summation(n-1) ;
  }
  console.log(summation(5));
  
// q2 solution below
function summationEven(n){
    if(n < 0){
        return 0;
    }
    return !(n % 2) ? n + summationEven(n - 2) : 0 + summationEven(n-1)
}
console.log(summationEven(5));

// q3 solution below 

function numAvg(num){
    let result = 0;

    for(var i = 0; i<num.length; i++){
        result += num[i]
       
        

    }
   result = result/num.length
    console.log(result);
}
numAvg([8, 2, 2, 4])


// q4 solution below 

function revW(word){
    word = word.split('')
    let arr = '';

    for(var i = word.length - 1; i>=0; i--){      
       console.log
        arr += word[i]
    }
    console.log(arr)
}
revW("caterpillar");

//q5 solution below 

function dash(br){
    return br.join("-")
  }
  console.log(dash(['test1', 'test2', 'test3'])) 

//q6 solution below

function countUpAndDown(num){
    let num2 = ''
    for(var i = 1; i <= num; i++){
        num2 += i
    }
    for(var i = num-1 ; i > 0; i--){
        num2 += i
    }
    console.log(num2);

}
countUpAndDown(2)


//q7 solution below

function wordsWithL(array){
    let toReturn = []
    for(i in array){
      if(array[i].indexOf('a') !== -1){
        toReturn.push(array[i]);
      }
    }
    return toReturn 
  }
  console.log(wordsWithL(['cat', 'rabbit', 'dog', 'frog']))

  //q8 solution below

  function longestWord(word) {

    let long = "";
    word = word.split(" ");
    for(i in word){
      if(long.length < word[i].length){
        long = word[i];
      }
    }
    return long;
  }
  console.log(longestWord("The cat in the house")) 
 