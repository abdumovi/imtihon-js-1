let sum = 1;
function prime(val){
  let  idf = 0;
  for(let i = 2; i < val; i++){
    if(val % i == 0){
      idf = 1;
    }
  }
  if(idf == 0){
    sum++;
  }
}
function getPrimenum(arr){
  for(let i = 3; i < arr; i++ ){
    prime(i)
  }
}
getPrimenum(100);
console.log(sum);

