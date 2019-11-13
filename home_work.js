function numberSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}



var nums = [10,3,10]


const odds = (x) =>(
  x.map(x=>(
  (x%2==0) ?  `${x} is not odd `:`${x} is  odd`
  ))


)


const rev = (x) => {
  x = x.split('')
  x = x.reverse()
  x = x.join('')
  return x
}


const AddDash = (x) => {

  x = x.join('-')
  return x
}


function countdown(i)
{
    if(i<=0)
        return i;
    return i + " " + countdown(--i);


}


function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}


var names = ['moe','ahmed','abdullah','majed','waleed','abood']

const arrMin = arr => console.log(`Avg num is ${Math.min(...arr)}`)

const ch = (x,y) =>(
  x.map(x=>(
    (x.includes(y)) ? console.log(`word ${x} contens ${y} in it `):''
  ))
)


ch(names,'m')



var word = 'Mohammed Alfisal'
word = word.split(' ')

var l = []
var cl = (w) => (
  w.forEach(w=>(
    l.push(w.length)


  ))
)


cl(word)
console.log(l)

var arr = l;
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});

word.map(x=>(
  (x.length == max) ? console.log(`the Longst word is ${x}`):''
))

function isEven(n) {
   return n % 2 == 0;
}
function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
console.log(countdown(10))
arrMin(nums)
console.log(odds(nums))
