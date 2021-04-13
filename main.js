var images=["IMG"];
var h=0;
function hyper(){
document.getElementById("reasons").innerHTML=reasons[h];
document.getElementById("album").src=images[h];
h++; document.getElementById("audio").play();
}