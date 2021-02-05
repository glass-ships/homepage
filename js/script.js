console.log('testing js script')

let themeDots = document.getElementsByClassName('browser-dot')

for (var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click',function(){
    console.log('clicked option')
  })
}