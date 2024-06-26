window.onscroll = function() {myFunction()};

// about section
function myFunction() {
  if (document.documentElement.scrollTop > 10) {
   let aboutMe= document.getElementById("aboutMe")
    aboutMe.className="moveUp";
    aboutMe.style="opacity:1"
  }
  
  //skill section 
  if(document.documentElement.scrollTop>650){
   let skills=document.getElementById("skills")
   
   skills.className="moveUp";
   skills.style="opacity:1"
  }
  
   if(document.documentElement.scrollTop>900){
   let skillSection=document.getElementById("skillSection")
   skillSection.className="moveUp"
   skillSection.style="opacity:1"
    
   }
  
  if(document.documentElement.scrollTop>1700){
   let projects=document.getElementById("projects")
   projects.className="moveUp"
   projects.style="opacity:1"
  }

if(document.documentElement.scrollTop>2900){
   let connectWithMe=document.getElementById("connectWithMe")
   connectWithMe.className="moveUp"
   connectWithMe.style="opacity:1"
  }  
  
  }
  
  /* nav */
  





