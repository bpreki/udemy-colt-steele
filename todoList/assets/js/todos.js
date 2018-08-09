$("li").click(function(){
  $(this).toggleClass("completed")
});
//click X to delete item
$("span").click(function(event){
  //selects li element
  $(this).parent().fadeOut(750, function(){
// removes item after fadeout completes
    $(this).remove()
  });
  //prevents parent events firing when span is selected 
  event.stopPropagation();
});
