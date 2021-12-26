let block = document.querySelector('.container');
let colors = document.querySelector('.colors')
window.addEventListener("keydown", function (event) {
  let vent = event.keyCode;
  if(event.keyCode == 16){
    colors.classList.add('block');
    let vent = 0;
  }
  console.log(vent);
  if(vent == 49){
    this.document.querySelector('body').style.backgroundColor = '#095309';
    let vent = 0;
  }
  if(vent == 50){
    this.document.querySelector('body').style.backgroundColor = '#8e910d';
    let vent = 0;
  }
  if(vent == 51){
    this.document.querySelector('body').style.backgroundColor = '#530b09';
    let vent = 0;
  }
  if(vent == 52){
    this.document.querySelector('body').style.backgroundColor = '#093b53';
    let vent = 0;
  }
});
