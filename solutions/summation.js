function summation (x){
let y = [];
let sum = 0;

for(i = 1 ; i <= x ; i++){
  y.push(i)
}

for(i = 0 ; i <= y.length ; i++){
  sum += i
}
console.log(sum)
}
summation(5)
