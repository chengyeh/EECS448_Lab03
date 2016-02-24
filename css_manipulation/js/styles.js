var p = document.getElementById("myP").style;

var borderR = document.getElementById("red_1");
var borderG = document.getElementById("green_1");
var borderB = document.getElementById("blue_1");
var borderW = document.getElementById("width_1");

var backgroundR = document.getElementById("red_2");
var backgroundG = document.getElementById("green_2");
var backgroundB = document.getElementById("blue_2");

function change() 
{
	p.borderStyle = "solid";
	p.borderColor = "#" + borderR.value + borderG.value + borderB.value;
	p.borderWidth = borderW.value + "px";
    p.backgroundColor = "#" + backgroundR.value + backgroundG.value + backgroundB.value;
}
