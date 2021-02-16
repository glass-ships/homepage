let themeDots = document.getElementsByClassName('browser-dot')

for (var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click',function(){
    console.log('clicked option')
  })
}

function hover(element, a){
  b = "images/buttons/" + a;
  element.setAttribute('src',b);
}

function unhover(element, a){
  b = "images/buttons/" + a;
  element.setAttribute('src', b);
}