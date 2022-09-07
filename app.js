 
// New Dark Mode Js

document.querySelector(".container").addEventListener("click", () => {
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
  document.querySelector("body").classList.toggle("dark-mode");

  if (document.body.classList.contains('dark-mode')){
            sessionStorage.setItem('dark-mode', 'enabled');
        } else {
            sessionStorage.setItem('dark-mode','disabled');
        }
        // TODO: Comeback to Check persistence Ft...
        // if (sessionStorage.getItem('dark-mode')=='enabled'){
        //         document.body.classList.toggle('dark-mode');
        //        ToggleOn.checked = true;
        
        //     }
}
);

//preloader Call Credits @ProMaker Dev YouTube.

// var loader = document.getElementById("loader")
// console.log(loader); // Call check
// window.addEventListener("load", vanish)

// function vanish() {
//     loader.classList.add("disappear");
// }

 
 // DarkMode feature

//  var lightBulb = document.getElementById("button");
//  var ToggleOn = document.getElementById('toggle');
//  lightBulb.onclick = ()=>{
   
//    document.body.classList.toggle("dark-mode");

//    if (document.body.classList.contains('dark-mode')){
//        sessionStorage.setItem('dark-mode', 'enabled');
//    } else {
//        sessionStorage.setItem('dark-mode','disabled');
//    }


   // lightBulb Icon change functionality
   //if(document.body.classList.contains("dark-mode")){
    // lightBulb.src = "./svgImages/darkModeSvg/sun.png";
   //} else {
    // lightBulb.src= "./svgImages/darkModeSvg/light-mobile-ui-basic-lamp-dark-mode-svgrepo-com.svg";
  //  }

   

   //Attempt to Set Persistent Preference in Light || DarkMode Credits @ ma-no.org

   

  // //  if (sessionStorage.getItem('dark-mode')=='enabled'){
  // //      document.body.classList.toggle('dark-mode');
  // //      ToggleOn.checked = true;

  //  }
 
 //}
 
 // DarkMode Feature ends Here

// BGmusic Starts Here
var timer = setInterval(() => {
    document.getElementById("popUp").style.display = "flex";
    
    var getMusic= document.getElementById("Yes");
    var cancel=  document.getElementById("No");
    
    if(getMusic){
    getMusic.onclick = ()=>{
      musicPlay();
      clearInterval(timer);
      document.getElementById("popUp").style.display = "none";
    }
    } if(cancel) { // else if doesn't seem to work
    cancel.onclick = ()=>{
      
      clearInterval(timer);
      document.getElementById("popUp").style.display = "none";
      }
    }else {
      document.getElementById("popUp").style.display = "none";
    
    }
      
    }, 3000);
    
    
    
    // PART B
    
    function musicPlay() {
      document.getElementById('ID').play();
    }
    
    function musicStop() {
    var reset = document.getElementById('ID');
    reset.pause();
    if (reset.pause()){
      reset.play(); // Prev issue solved reset code credits @adeneo (Stack)
    }
      else{
        reset.currentTime = 0;
      }
    } 
    // BGmusic Ends Here
