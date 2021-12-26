function getPrimenum(...arr){
  for(let i = 0; i <= arr.length; i++ ){
    for(let j = 2; j < arr[i]; i++){
      if(arr[i] % j !== 0){
        console.log(arr[i]);
      }
    }
  }
}
getPrimenum(3,22,29,18,31);