//////Question 1


let sum = 0;
function summation(n){
	for(let i=1; i<=n;i++){
		sum += i
	}
  console.log(sum)
}

summation(5)


//////Question 2

let sum = 0;
function summationEven(n){
	for(let i=1; i<=n;i++){
		if(i%2 == 0){sum += i}
	}
  console.log(sum)
}

summationEven(6)

//////Question 3


let sum = 0;
let average = 0;
function avg(a){
	for(let i=0; i<a.length;i++){
		sum += a[i]
	}
	average = sum/a.length
	console.log(average)
}

avg([8, 2, 2, 4,])


//////Question 4


function reverse(spt){
	sptMatrix = spt.split('')
  let newMatrix = [];
	for(let i=0; i<sptMatrix.length;i++){
    newMatrix.unshift(sptMatrix[i])
  }
  console.log(newMatrix.join(''))
}

reverse("caterpillar")


//////Question 5


function addDashes(dash){
	console.log(dash.join('-'))
}

addDashes(['test1', 'test2', 'test3'])

//////Question 6

let counter = []
function countUpAndDown(num){
	for(let i=1; i<=num;i++){
		counter.push(i)
	}
	for(let j=num-1;j>0;j--){
		counter.push(j)
	}
	console.log(counter.join(' '))
}

countUpAndDown(3)

//////Question 7


let inside = 0;
let ans = [];
function wordsWithA(words){
	for(let i=0;i<words.length;i++){
		inside = words[i].split('')
		for(let j=0;inside.length;j++){
			if(inside.indexOf('a')>0){
				ans.push(words[i])
			}
      break;
		}
	}

	console.log(ans)
}

wordsWithA(['cat', 'rabbit', 'dog', 'frog'])


//////Question 8

let inside = 0;
let ans = [];
function wordsWithLetter(letter,words){
	for(let i=0;i<words.length;i++){
		inside = words[i].split('')
		for(let j=0;inside.length;j++){
			if(inside.indexOf(letter)>0){
				ans.push(words[i])
			}
      break;
		}
	}

	console.log(ans)
}

wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])


//////Question 9

function longestWord(sen){
	strMat = sen.split(" ")
	let max = 0;
  let ans = 0;
	for(let i=0;i<strMat.length;i++){
		if(strMat[i].length>max){
			max = strMat[i].length
      ans = strMat[i]
		}
	}
	console.log(ans)
}

longestWord("The cat in the house")

//////Question 10

function largestEvenNumber(array){
	let max = 0
	for(let i=0;i<array.length;i++){
		if(array[i]>max && array[i]%2==0){
			max = array[i]
		}
	}
	console.log(max)
}

largestEvenNumber([1,2,3,10,4,7,0])
