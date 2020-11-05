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
else {
  var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"transparent");
grd.addColorStop(1,"transparent");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
}
  }