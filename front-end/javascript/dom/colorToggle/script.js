var bnt = document.getElementsByName("button");
var isPurple = false;
bnt[0].addEventListener('click', function(){
 if(isPurple){
   document.body.style.background = "white";
   isPurple=false;
 }else{
   document.body.style.background = "purple";
   isPurple=true;
 }
});
