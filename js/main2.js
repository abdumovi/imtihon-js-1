let input = document.querySelector('.form-control');
let btns = document.querySelector('.btns');
let all = document.querySelector('.all');
let lst = [];
btns.addEventListener('click',function(){
  let inputval = parseInt(input.value);
  input.value = "";
  if(inputval){
    let span = document.createElement('span');
    span.className = 'span';
    span.textContent = inputval;
    all.append(span);
    lst.push(span);
  }
});
function clerSpan(){
  setInterval(function(){
    for(let i of lst){
      if(i.textContent > 0){
        i.textContent -= 1;
      }
      if(i.textContent == 0){
        i.classList.add("revove");
        revovespan()

      }
    }
  },1000);
}
function revovespan(){
  let all = document.querySelector('.all');
  let span = document.querySelectorAll('.span');
  for(let i of span){
    if(i.classList.contains('revove')){
      i.style.display = 'none';
    }
  }
}

clerSpan();