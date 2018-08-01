var numsqr = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var clrGl = document.getElementById("clrDis");
var mode =document.querySelectorAll(".mode");
var rst = document.querySelector("#reset")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
var msg= document.querySelector("#msg");
var h1 = document.querySelector('h1');

init();

function init(){
  intmode()
  initsqr()
  reset();
}

function intmode(){
  for(var i = 0; i< mode.length; i++){
    mode[i].addEventListener("click", function(){
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "easy" ? numsqr = 3: numsqr = 6;
      reset();
    });
  }
}

function initsqr(){
  for(i=0;i<squares.length;i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        msg.textContent="!!! winner !!!";
        rst.textContent = "Play again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        msg.style.color = pickedColor;
      }else{
        this.style.backgroundColor = "#252525";
        msg.style.color = clickedColor;
        msg.textContent = "!! Try again !!";
      }
    });
  }
}

function reset(){
  colors= gnrndclr(numsqr);
  pickedColor = pickcolor();
  clrGl.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  rst.textContent = "New colour's";
  msg.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
}
rst.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickcolor(){
  var rndNum =  Math.floor(Math.random()*colors.length);
  return colors[rndNum];
}

function gnrndclr(num){
  var arr = []
  for(var i = 0 ; i<num; i++){
    arr.push(rndclr())
  }
  return arr;
}

function rndclr(){
  var r =Math.floor(Math.random()*256);
  var g =Math.floor(Math.random()*256);
  var b =Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}
