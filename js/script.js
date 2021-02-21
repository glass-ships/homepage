let themeDots = document.getElementsByClassName('browser-dot')

for (var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click',function(){
    console.log('clicked option')
  })
}

function hover(element){
  // element.style.filter = "hue-rotate(90deg)"  
  element.setAttribute("style", "width: 7rem; height: 7rem;")
  element.classList.add("rotate-hue")
}

function unhover(element){
  // element.style.filter = "hue-rotate(0deg)"
  element.setAttribute("style", "width: 5rem; height: 5rem;")
  element.classList.remove("rotate-hue")
}