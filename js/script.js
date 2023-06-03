/** Toggles display of specified blurb on or off */
toggleProject = (value) => {
   const wrapper = document.querySelector('#projectWrapper');
   const blurb = document.querySelector('#projectDescription'); 
   console.log("Value", value)
   console.log("Blurb", blurb.innerHTML)
   if (wrapper.style.display == 'none') {
         console.log('showing')
         wrapper.style.display = 'block';
         blurb.innerHTML = value;
   }
   else if(wrapper.style.display == 'block' && blurb.innerHTML != value) {
      console.log('changing')
      blurb.innerHTML = value;
   }
   else if(wrapper.style.display == 'block' && blurb.innerHTML == value) {
      console.log('hiding')
      wrapper.style.display = 'none';
      blurb.innerHTML = '';
   }
   
};

/** Click to show/hide */
// function toggleVis(id) {
//     var e = document.getElementById(id);
//     if(e.style.display == 'block')
//        e.style.display = 'none';
//     else if(e.style.display == 'none')
//        e.style.display = 'block';
//  };
