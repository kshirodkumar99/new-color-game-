var color=["rgb(255, 0, 0)",
           "rgb(255, 255, 0)",
           "rgb(0, 255, 0)",
           "rgb(0, 255, 255)",
           "rgb(0, 0, 255)",
           "rgb(255, 0, 255)"]

var squares = document.querySelectorAll(".square");
var pickedColor=color[3];
var colorDisplay =document.getElementById("colordisplay");
colorDisplay.textContent=pickedColor;
for(var i=0; i < squares.length;i++)
{
	squares[i].style.backgroundColor=color[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedColor){
			alert("corrct");

		} 
		else
			alert("wrong");

	})
}           