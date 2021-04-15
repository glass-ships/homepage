// Get current year
var theDate=new Date()
document.write(theDate.getFullYear())

// Click to show/hide
function toggleVis(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else if(e.style.display == 'none')
       e.style.display = 'block';
 }

function toggleProject(value) {
   a = document.getElementById('project-blurb-wrapper');
   b = document.getElementById('project-blurb'); 
   if(a.style.display == 'none')
      a.style.display = 'block';
   b.innerHTML = value;
}