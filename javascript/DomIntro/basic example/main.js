//simple variable to select element
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
//boolean object for background changer
var isBlue = false;
//change selected element color
h1.style.color = "green";
//alternate background color 0.5 second interval
setInterval(function(){
  if(isBlue){
    body.style.background = "white";
  }else{
    body.style.background = "blue"
  }
  isBlue= !isBlue;
  // 500 = 0.5 seconds 1000 = 1 second 
},500);
