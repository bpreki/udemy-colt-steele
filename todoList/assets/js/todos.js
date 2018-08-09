
// cross off items on todo list
$("ul").on("click","li", function(){
  //toggles class attributes checked or unchecked
  $(this).toggleClass("completed")
});


//click X to delete item
$("ul").on("click", "span", function(event){
  //selects li element
  $(this).parent().fadeOut(750, function(){
// removes item after fadeout completes
    $(this).remove()
  });
  //prevents parent events firing when span is selected
  event.stopPropagation();
});

//add new todos to the list
$("input[type ='text']").keypress(function(e){
  if(e.which === 13){
    //selects text from input
    var todo = $(this).val();
    //creates new todo element
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +todo+"</li>")
  }
})
$("#clip").click(function(){
  $("input[type ='text']").fadeToggle();
})
