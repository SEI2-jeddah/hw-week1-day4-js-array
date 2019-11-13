var word = 'mohammed abdulrhman alfisal'
word = word.split(' ')
const print = (x) => (console.log(x))
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
