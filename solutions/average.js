function avg(nums){
result = 0; 
for(i=0 ; i < nums.length;i++){
  result += nums[i]
}
result = result / nums.length
console.log(result)
}

avg([8,2,2,4])
