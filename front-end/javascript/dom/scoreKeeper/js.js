var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var rst = document.getElementById("reset");
var p1scr = document.querySelector("#p1scr");
var p2scr = document.querySelector("#p2scr");
var goal =document.querySelector("#goal");
var lmt = document.getElementById("lmt");

var p1s = 0;
var p2s = 0;
var wscr = 5;
var fin = false;

p1.addEventListener("click", function(){
  if(!fin){
    p1s++;
    if(p1s == wscr){
      fin = true;
      p1scr.classList.add("winner");
    }
    p1scr.textContent = p1s;
  }

});

p2.addEventListener("click", function(){
  if(!fin){
  p2s++;
  if(p2s == wscr){
    fin = true;
    p2scr.classList.add("winner");
  }
  p2scr.textContent = p2s;
}});
function reset(){
  p1s = 0;
  p2s = 0;
  p1scr.textContent=0;
  p2scr.textContent=0;
  p1scr.classList.remove("winner");
  p2scr.classList.remove("winner");
  fin = false;

}
rst.addEventListener("click", function(){
  reset();
});
goal.addEventListener("change", function(){
  reset();
  lmt.textContent = goal.value,
  wscr = goal.value;
});
