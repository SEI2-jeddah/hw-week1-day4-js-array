//1
//--------------------------------------------
function summation (n){
    let sum = 0;
for ( let i = 1; i <= n ; i++)
{
  sum += i
}
    return sum  
 } 
summation(5)
//--------------------------------------------

//2 
function summation (n){
    let sum = 0;
for ( let i = 1; i <= n ; i++)
{ 

  if (i % 2 ==0 )
 {sum += i} 
}
    return sum  
 } 
summation(5)

//--------------------------------------------
//3
function summation (n){
    let sum = 0;
    let ave = 0;
for ( let i = 0; i < n.length ; i++)
{ 
    sum += n[i]
 
}
 ave = sum / n.length

   return ave 
 } 
summation([8, 2, 2, 4])
//--------------------------------------------
//4
function reverse () {
    let word  = "caterpillar";
    word = word.split("");
    word = word.reverse(); 
   word = word.join("");

   return word 
 } 
reverse()

//--------------------------------------------
//5
function combines () {
    let word  = ['test1', 'test2', 'test3'];
    word = word.join("-");
   return word 
 } 
combines()

//--------------------------------------------
//6

function countUpAndDown(num) {
    var s = "";  //splet 
    for(var i = 1; i <= num; i++ ) {
          s += i;  
    } //count front 
    for(var i = num; i >0 ; i--) {
          s += i;  
    }// for loop count back
    
  console.log (s)
  } countUpAndDown(3)

//--------------------------------------------
//7
// splet the word
// create function count 

// run for loop to search by the indexof 
// if indexof == letter then return the reslut 
// here there is to function to short all answe 1 - search by indexOf then use filterfunction

function wordsWithA(num) 
{ let newarr =[]
    for (let i =0; i <  num.length; i++)
    {
        if (num[i].indexOf("a")> 0)
        {
            newarr.push(num[i]);
        }
    } console.log (newarr);

}wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

//--------------------------------------------
//8
//same as slove number 7

function wordsWithA(num) 
{ let newarr =[]
    for (let i =0; i <  num.length; i++)
    {
        if (num[i].indexOf("g")> 0)
        {
            newarr.push(num[i]);
        }
    } console.log (newarr);

}wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

//--------------------------------------------
//9
 ///1 - make function 
 //2- spelt each word 
 // 3- make for loop to count each letter in same index 
 // 4- make compression and print the highest index 
//--------------------------------------------
//10

var largestEvenNumber = function (arry){
    let high = 0
    for (let i = 0; i < arry.length; i++) 
    {
       if (arry[i] > high && arry[i] % 2 == 0 )
      
            high = arry[i]
       
    }  return  high
    }
    largestEvenNumber([1,2,3,10,4,7,0])

//--------------------------------------------

