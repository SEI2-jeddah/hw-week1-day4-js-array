//problem 1

let sum = 0;
let summation = function(n){

    for(var i = 0; i <= n; i++){
        sum+= i;
    }
    return sum;
}
console.log(summation(5))


//problem 2

let summ =0;
let sumEven = function (n){
    for(var i = 0; i < n; i++){
        if(i%2 == 0){
            summ+= i;

        }
    }
    return summ;
}
console.log(sumEven(5));

//Problem 3
let summm = 0;

let average = function(n){
    for(var i = 0; i < n.length; i++){
        summm+= n[i];
    }
    return (summm/n.length)
}

console.log(average([8,2,2,4]));

//Problem 4
/*
Create a function to reverse the letters in a word 
reverse("caterpillar") // should return "rallipretac"
*/

let reversy = [];
let reversee = function(d){
    var h = d.split('')
    for(var i = h.length-1 ; i >= 0; i--){
        reversy.push(h[i])
    }
    return reversy;

}
console.log(reversee("Nujud"))


//Problem 5
let addDashes = function(n){
    let string = ''
    for(var i = 0; i < n.length; i++){
        if(i == n.length -1){
            string+= n[i]
        }else{
            string+= n[i] + '-'
        }

    }
    return (string);
}

console.log(addDashes(['test1', 'test2', 'test3']));

//Problem 6

let countUpAndDown = function(number){
    let arr = '';
    for(var i = 1; i <= number; i++){
        arr+=i;
    }
    for(var i = number-1; i>0; i--){
        arr+=i;
    }
    return arr;
}
console.log(countUpAndDown(3));

//Problem 7
/*
Write a function that will tell you all of the words in an array that contain the letter `a` 
wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']
*/

let names = ['cat', 'rabbit', 'dog', 'frog'];
let wordsWithA = function(string){
    let arr = [];
    for( var i =0; i < string.length; i++){
        if(string[i].includes("a")){
            arr.push(string[i])
        }

    }
    return arr;
}

console.log(wordsWithA(names))


//Problem 8

/*
Write a function that will tell you all of the words in an array that contain a specified letter 
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
*/

let namess = ['cat', 'rabbit', 'dog', 'frog'];
let wordsWithLetter = function(string, n){
    let arr = [];
    for( var i =0; i < string.length; i++){
        if(string[i].includes(n)){
            arr.push(string[i])
        }

    }
    return arr;
}
console.log(wordsWithLetter(namess,"g"))

//Problem 9 

/*
Function that returns the longest word in sentence 
longestWord("The cat in the house") // should return "house"

*/

let s = "The cat in the house"
let longestWord = function(string){
    splitStr = string.split(" ");
    let longestWord = ""
    for(var i =0; i< splitStr.length; i++){
        if(longestWord.length < splitStr[i].length ){
            longestWord = splitStr[i]
            
        }
    }
    return longestWord;
}
console.log(longestWord(s));

//Problem 10
/*
Function that returns the largest even number 
largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
*/
let largestOne = 0;
let largestEvenNumber = function(string){
    for( var i = 0; i < string.length; i++){
        if(string[i] > largestOne&& string[i]%2 ==0){
            
                largestOne = string[i]
            }
        }
        return largestOne;
    }



console.log(largestEvenNumber([1,2,3,10,4,7,0]));
