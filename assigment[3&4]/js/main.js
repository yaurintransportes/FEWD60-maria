var link1 = document.getElementById("link1")
var link2 = document.getElementById("link2")
var link3 = document.getElementById("link3")
var link4 = document.getElementById("link4")
var link5 = document.getElementById("link5")

link1.onmouseover = mouseover;
link2.onmouseover = mouseover;
link3.onmouseover = mouseover;
link4.onmouseover = mouseover;
link5.onmouseover = mouseover;


function mouseover(){
	this.setAttribute("class","blue-steel");
}

link1.onmouseout = mouseout;
link2.onmouseout = mouseout;
link3.onmouseout = mouseout;
link4.onmouseout = mouseout;
link5.onmouseout = mouseout;
function mouseout(){
	this.removeAttribute("class","blue-steel");
}
// document.getElementsByTagName("a").onmouseout = mouseout;

