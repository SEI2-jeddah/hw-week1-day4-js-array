//T1----------------------------------------------


function sum(number){
    console.log(( number  *(number  + 1) )  /2)
}    

sum(50)

//T2-----------------------------------------------

function summeven(number )
{
    var  d = 0
    for(var i = 1; i<= number ; i++){
       if(i % 2 == 0){
            d += i 
            }}
        console.log(d)   
    }
    summeven(10)

//T3-----------------------------------------------
function avrage(num){
    let d = 0;
    for( let  i = 0 ; i<num.length; i++){
        d += num[i]    }
    d = d /num.length
    console.log(d);   }
avrage([6, 8, 9, 2])
//T4-----------------------------------------------

function reverse(w){
    w = w.split('  ')
    let d = ' ';
for( let i = w.length - 1; i>= 0; i--) {  
         d+= w[i]
         }
    console.log(d)
}
reverse("AlghamdiDiala");

//T5-----------------------------------------------

function addthedashes(arr){
    let d = ' '
    for(let i = 0; i < arr.length; i++)
    {
        if(i == arr.length-1)
        {
            d += arr[i]
        }
        else{
            d += arr[i] + '-'
        }
        }
    console.log(d)
}
addthedashes(['T1', 'T2', 'T3'])
//T6-----------------------------------------------
function countupAnddown(number){
    let d = ''
    for(let i = 1; i <= number; i++)
    {
        d += i
    }
    for(var i = number-1 ; i > 0; i--)
    {
       d += i
        }
    console.log(d);
}
countupAnddown(6)
//T7-----------------------------------------------
function wordwitha(arr){
    let d = []
    let w = ''
    let t = ''
    for(var i = 0; i < arr.length; i++)
    {
        w= arr[i]
        t= w.split('')
        for(var j = 0; j < t.length; j++)
        {
            if(t[j] == 'a'){
                d.push(w)
            }}}
    console.log(d)
}
wordwitha(['cat', 'rabbit', 'dog', 'frog']);
//T8-----------------------------------------------
function wordwithl(l, arr){
    let d = []
    let w = ''
    let t = ''
    for(var i = 0; i < arr.length; i++)
    {
        w = arr[i]

        t = w.split('')
        for(var j = 0; j < t.length; j++)
        {
            if(t[j] == l){
                d.push(w)
            }}}
    console.log(d)
}
wordwithl("g", ['cat', 'rabbit', 'dog', 'frog'])

//T9-------------------------------------------------
function thelongestword(w){
    w = w.split('  ')
    let r
    let number = 0;
    let numberchar; 

    for(let i = 0; i < w.length; i++)
    {
      numberchar = w[i].split('')
      if (numberchar.length > number)
      {
        number = numberchar.length
        r = w[i]
      }}
    console.log(r)
}
   thelongestword("The cat playing in the house")
   //T10-----------------------------------------------
   
function thelargestevennumber(arr){
    let l = 0;
    for(var i= 0; i <arr.length ; i++)
    {
        if(arr[i]%2==0){
            if (arr[i] > l)
            {
                l= arr[i] 
            }}}
    console.log(l);

}
thelargestevennumber([1,2,3,10,4,7,0,12,15,17,20])