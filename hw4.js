function summation(num){
    let sum =0;
    for( let i=1; i <= num; i++)
       {
         sum += i;
       }
 return sum;
}
let x= summation(5);
console.log(x)
//******************************************* */
function summationEvenn(num){
    let sum =0;
    for( let i=1; i <= num; i++)
       { if( i % 2 === 0)
            {sum += i;
            }
       }
 return sum;
}
let y= summationEvenn(5);
console.log(y)
//******************************************** */
function avg(array){
    let sum =0;
    for( let i=0; i < array.length; i++)
       { 
            sum += array[i];     
       }
 return (sum / array.length);
}
let arry= [8, 2, 2, 4]
 let z =avg();
console.log(z)
//********************************************* */
function reverse(str) {
    let rev= str.split("");
    let arry=[];
    console.log(rev.length)
     console.log(rev)
   let indx = 0;
       for(let i=rev.length-1; i>= 0; i--)
        {   console.log(rev[i])
           arry[indx] = rev[i];
           //console.log(arry)
           indx++;
        }
   console.log(arry)
   }
   let stri = "Tea";
   
   reverse(stri)
   //*********************************** */
   function addDashes(array)
   {
     let word =""
    for( let i= 0;i<array.length;i++)
    { 
       if (i !== array.length-1) // to not print '-' after last word
        word += array[i] + "-"
        else 
        word += array[i]}
  console.log(word)
   }
let arry=[ 'babt','nnn','ffff']
 addDashes(arry)
//*************************************** */
function countUpAndDown(num) {
    let resu = ""
  for( let i= 1;i<=(num +1);i++)
      { 
         if ( i <=num)
         resu+= i
         else 
         { 
           for( let j= 1;j<=num-1;j++)
           resu+=num-j
         }
     console.log(resu)
     }
     //console.log(resu)
     }
  countUpAndDown(5)
  //********************************* */

  function longestWord(sentec){
        let words= sentec.split(" ");
        for(let i=0; i<words.length; i++)
        {
            if ((words[i].length > result.length))
             result = words[i]
        }
  }
  //****************************** */
  function wordsWithA(array){
    let words=[]
    let indx=0
     for(let i=0; i< array.length;i++)
       {
           if (array[i].indexOf('a') !== -1)
           
              { 
                  words[indx]=array[i];
                     indx++;
              }

       }
       console.log(words)
}
let array =['cat', 'rabbit', 'dog', 'frog']
wordsWithA(array)
//********************************************* */
function wordsWithLetter( lett,array){
    let words=[]
    let indx=0
     for(let i=0; i< array.length;i++)
       {
           if (array[i].indexOf('g') !== -1)
           
              { 
                  words[indx]=array[i];
                     indx++;
              }

       }
       console.log(words)
}
let array =['cat', 'rabbit', 'dog', 'frog']
wordsWithLetter('g',array)
//******************************************* */
function largestEvenNumber(array)
{
 let larg=0;
  for( let i=0;i<array.length;i++)
    {
      
      if (array[i]%2===0)
      {
        if(array[i]< array[i+1])
          {
            if ( larg <array[i+1] )
            larg=array[i+1];
          }
          else 
          if ( larg <array[i] )
          larg=array[i];
      }
     console.log(larg);  
    }
  // console.log(larg);
}
let arry=[16,2,4,10,3,12];
largestEvenNumber(arry)