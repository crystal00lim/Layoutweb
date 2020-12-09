  function myCanvas(sw) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
if (sw==0) {
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"red");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
} 
else if (sw==1) {
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
}
  }

localStorage.setItem('theme', 'dark-theme.css');
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-theme.css';
            themeToggle.innerText = 'Switch to light mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            themeToggle.innerText = 'Switch to dark mode';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})
function darkmode(){
button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

//document.addEventListener('DOMContentLoaded', () => {

//    const themeStylesheet = document.getElementById('theme'); 
//const themeToggle = document.getElementById('theme-toggle');
//    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
  //      if(themeStylesheet.href.includes('light')){
    //        themeStylesheet.href = 'dark-theme.css';
      //      themeToggle.innerText = 'Switch to light mode';
        //} else {
            // if it's dark -> go light
          //  themeStylesheet.href = 'light-theme.css';
            //themeToggle.innerText = 'Switch to dark mode';

 //       }
   // })
//})

//function darkmode() {
// Check browser support
//if (typeof(Storage) !== "undefined") {
  // Store
  //localStorage.setItem("mode", "light");
  // Retrieve
  //document.getElementById("result").innerHTML = localStorage.getItem("mode");
//} else {
  //document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//}
//}