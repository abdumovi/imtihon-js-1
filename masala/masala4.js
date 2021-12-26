function res2(item,k){
  let sum = 0;
  for(let i = item; i < k; i++){
    sum += k*k
  }
  return sum;
}
function res(n,k){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += res2(i,k);
  }
  return sum;
}
console.log(res(10,2));