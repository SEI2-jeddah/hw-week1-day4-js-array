function summation(n){
    let sum = 0;
      for ( let i = 0; i <= n ; i++ ){
         sum +=  i;
         }
        return sum;
  }
     console.log (summation(5))
  
  function summationEven(n){
    let sum = 0;
      for ( let i = 0; i <= n ; i++ ){
        if (i%2 === 0){
          sum +=  i;
        }
    }
    return sum;
  }
     console.log (summationEven(5))
  
    
    function avg(words){
    let result = 0
      for (let i = 0; i < words.length; i++){
          
          result = words[i] +result 
      }
  
      result = result/ words.length
  
      console.log(result)
    }
    avg([8, 2, 2, 4])
  
    function reverse (words){
    let arr = words.split ("");
    let ans = ''
      for (let i = 0; i < arr.length; i++){
          
          ans = words[i] + ans
      }
      console.log(ans)
    }
    reverse("caterpillar")
  
    function addDashes (arr){
     return arr.join ("-");
    }
    console.log(addDashes(['test1', 'test2', 'test3']))
  
  
  function countUpAndDown(numbers){
    let ans = ''
  
      for (let i = 1; i <= numbers; i++){
          
          ans =  ans + i
    }
    for (let i = numbers - 1; i > 0; i--){
          
          ans = ans + i
      }
      console.log(ans);
  }
    countUpAndDown(3)
  
  
  
    function wordsWithA (words){
    let ans = []
      for (let i = 0; i < words.length; i++){
        if ( words[i].indexOf("a") !== -1){
          ans.push(words[i])
        }
  
          
        }
      
      console.log(ans)
    }
    wordsWithA(['cat', 'rabbit', 'dog', 'frog']) 
  
  
  function wordsWithLetter (letter, words){
    let ans = []
      for (let i = 0; i < words.length; i++){
        if ( words[i].indexOf(letter) !== -1){
          ans.push(words[i])
        }
  
          
        }
      
      console.log(ans)
    }
    wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])