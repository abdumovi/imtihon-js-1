function add(a,b){
  let c = a + b;
  if(a > 0 && b < 0){
    console.log(`${a} ${b} = ${c}`);
  }
  if(a && !b){
    console.log(`${a} + ${0} = ${a}`);
  }
  if(!a && b){
    console.log(`${0} ${b} = ${b}`);
  }
  
}
add(0,-10)