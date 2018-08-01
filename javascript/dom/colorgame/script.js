var colors=[
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var clrGl = document.getElementById("clrDis");

  clrGl.textContent = pickedColor;

for(i=0;i<squares.length;i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
alert("winner")
    }else{
      this.style.backgroundColor = "rgb(35, 35, 35)";
    }
  })
}
