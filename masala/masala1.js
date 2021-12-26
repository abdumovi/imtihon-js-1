let son = [10,9,8,7,6,5,4,3,2,1];

for(let i = 0; i < son.length;i++){
  for(let j = 0; j < son.length;j++){
    if(son[j] > son[j + 1]){
      let a = son[j];
      son[j] = son[j + 1];
      son[j + 1] = a
    }
  }
}
console.log(son);