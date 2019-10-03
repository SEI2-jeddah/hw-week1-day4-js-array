function numberSum1(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      console.log(total)
      
  }
  numberSum1(5)


  function even2(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
          if(i % 2 == 0){
        total += i;
          }
    }
      console.log(total)
      
  }
  even2(5)

  function average3(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      avg = total / N
      console.log(total)
      
  }
  average3(5)

function revers4(word){
    var x = word.split("")
    var reverseArray = x.reverse();
    var y = reverseArray.join("")
    console.log(y)
}
revers4("somthing")

function dash5(word){
    var x = [];
    for(i=0; i < word.length ; i++){
     x = word.join('-')
    }
    console.log(x)
}
dash5(["foot", "Dog", "fish", "car"])


function climb6(N) {
    var total = [];
    var total1 =[];
      for(var i = 1; i <= N; i++){
        total += i + ""
      }
      for(var i = N -1 ; i > 0; i-- ){
        total1 += i + ""
      }

      console.log(total.concat(total1))
      
  }
  climb6(3)

  function wordsWithA7(words){
     x = []
    for(i=0; i < words.length ; i++){
     if( words[i].includes("a")){
      x += words[i] + " "
        
}
}
console.log(x)
}
  wordsWithA7(['cat', 'rabbit', 'dog', 'frog'])

  function letter8(L , words){
    x = []
   for(i=0; i < words.length ; i++){
    if( words[i].includes(L)){
     x += words[i] + " "    
}
}
console.log(x)
}
letter8("g" , ['cat', 'rabbit', 'dog', 'frog'])

function longest9(word){
    var x = word.split(" ")
    var longestWord = []
    for(var i = 0; i < x.length; i++){
        if(x[i].length > longestWord.length){ 
       var longestWord = x[i];
    }      
}
console.log(longestWord)
}
longest9("The cat in  the house")



function max_even10(N) {

    N.sort((x, y) => y - x);
  
    for (var i = 0; i < N.length; i++) {
      if (N[i] % 2 == 0)
       var S = N[0]
      }
    console.log(S)
    }

    max_even10([1,5,3,6,88,9,6,43,8])
