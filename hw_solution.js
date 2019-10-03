// 1.
function summation(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
  var output = summation(5);
  console.log(output)
  // 2.
var a=1; 
var sum=0;
function summtionEven(N){
	for(a=1;a<=N;a++)
{
    	if(a%2==0)
    {
        sum=sum+a;
    }
}}
summtionEven(20)
console.log(sum)
// 3.
let values = [];
function avg(values){
	let sum = values.reduce((previous, current) => current += previous);
	let output = sum / values.length;
	console.log(output)
}
avg([8, 2, 2, 4]);
// 4.
function reverse(str){
    let stringRev ="";
    for(let i= 0; i<str.length; i++){
        stringRev = str[i]+stringRev;
    }
    return stringRev;
}
console.log(reverse("caterpillar"));
// 5.
function addDashes(str){
    let stringRev ="";
    for(let i= 0; i<str.length; i++){
        stringRev = stringRev+str[i]+"-";
    }
    stringRev =  stringRev.substring(0, stringRev.length - 1);
    return stringRev;
}
console.log(addDashes(['test1', 'test2', 'test3']));