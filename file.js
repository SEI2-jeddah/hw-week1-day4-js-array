//-----------------1-----------------

function summation(num){
    console.log(( num *(num + 1))/2)
}
summation(100)

//------------------2-----------------


function summationEven(num){
    let ans = 0;
    for(var i = 1; i<= num; i++){

        if(i % 2 == 0){
            ans += i 
        }
    }
    console.log(ans)   
}
summationEven(5)

//-------------------3----------------

function avg(numbers){
    let ans = 0;
    for(var i=0; i<numbers.length; i++){
        ans += numbers[i]
    }
    ans = ans/numbers.length
    console.log(ans);
    
}
avg([8, 2, 2, 4])

//--------------------4---------------

function reverse(word){
    word = word.split('')
    let ans = '';

    for(var i = word.length - 1; i>=0; i--){      
       console.log
        ans += word[i]
    }
    console.log(ans)
}
reverse("caterpillar");

//---------------------5--------------

function addDashes(array){
    let ans = ''
    for(var i = 0; i < array.length; i++){
        if(i == array.length-1){
            ans += array[i]
        }else{
            ans += array[i] + '-'
        }
        
    }
    console.log(ans)
}

addDashes(['test1', 'test2', 'test3'])

//----------------------6-------------
function countUpAndDown(num){
    let ans = ''
    for(var i = 1; i <= num; i++){
        ans += i
    }
    for(var i = num-1 ; i > 0; i--){
        ans += i
    }
    console.log(ans);
    
}
countUpAndDown(3)

//-----------------------7------------

function wordsWithA(array){
    let ans = []
    let word = ''
    let test = ''
    for(var i = 0; i < array.length; i++){
        word = array[i]

        test = word.split('')
        for(var j = 0; j < test.length; j++){
            if(test[j] == 'a'){
                ans.push(word)
            }
            
        }
    
    }
    console.log(ans)
}

wordsWithA(['cat', 'rabbit', 'dog', 'frog']);

//------------------------8-----------

function wordsWithLetter(letter, array){
    let ans = []
    let word = ''
    let test = ''
    for(var i = 0; i < array.length; i++){
        word = array[i]

        test = word.split('')
        for(var j = 0; j < test.length; j++){
            if(test[j] == letter){
                ans.push(word)
            }
            
        }
    
    }
    console.log(ans)
}

wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])


//-----------------------9------------

function longestWord(words){
    words = words.split(' ')
    let result
    //write your code here
    let num = 0;
    let numchar; 
    
    for(var i = 0; i < words.length; i++){
      numchar = words[i].split('')
      if (numchar.length > num){
        num = numchar.length
        result = words[i]
        
      }
    }
    console.log(result)
}
longestWord("The cat in the house")

//---------------------10--------------

function largestEvenNumber(array){
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