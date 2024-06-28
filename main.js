
window.onscroll = function() {myFunction()};

 let navElements=document.querySelectorAll(".navElements")
 
// transitions
// about section 
function myFunction() {
 
 let scrolling=document.documentElement.scrollTop;
 
// transition on navIcon

// function to transform the nav elements 
  let navElmCheck=(a)=>{
   for (let i = 0; i < navElements.length; i++) {
    if(i==a){
    navElements.item(i).id="navElm"
    }
     
     else{
          navElements.item(i).id="";
        }
      }
  }
  
// check the scrolling & then do changes on nav elements 
  if(scrolling<700 && scrolling>=0){
      navElmCheck(0)
    }
  
  else if (scrolling>=700 && scrolling<1700) {
      navElmCheck(1);
}
 else if (scrolling>=1700 && scrolling<2900) {
      navElmCheck(2);
}
else{
    navElmCheck(3);
}
 // transition on elements
  if (scrolling > 10) {
  
   let aboutMe= document.getElementById("aboutMe")
    aboutMe.className="moveUp";
    aboutMe.style="opacity:1"
  }
  
  //skill section 
if(scrolling>650){
   let skills=document.getElementById("skills")
   
   skills.className="moveUp";
   skills.style="opacity:1"
  }
  
   if(scrolling>900){
   let skillSection=document.getElementById("skillSection")
   skillSection.className="moveUp"
   skillSection.style="opacity:1"
    
   }
  
  if(scrolling>1700){
   let projects=document.getElementById("projects")
   projects.className="moveUp"
   projects.style="opacity:1"
  }

if(scrolling>2900){
   let connectWithMe=document.getElementById("connectWithMe")
   connectWithMe.className="moveUp"
   connectWithMe.style="opacity:1"
  }  
  
  }
  
  





