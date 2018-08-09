$("h1").addClass("correct");
//adds class to all
//$("li").addClass("wrong");
// toggles class
$("li").toggleClass("correct");
$("h1").on("click", function(){
  $("h1").css("backgroundColor","purple")
})
$("li").on("mouseenter", function(){
  $(this).css("font-weight", "bold")
})
$("li").on("mouseleave", function(){
  $(this).css("font-weight", "normal")
})
