function res(n,k){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += Math.pow(i,k);
  }
  return sum;
}
console.log(res(10,2));