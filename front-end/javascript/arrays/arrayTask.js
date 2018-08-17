function printReverse(ary){
  for (var i= ary.length-1; i >= 0; i--){
    console.log(printReverse[i])
  }
}

function isUniform(input){
  var test = input[0]
  for(var i=0; i<input.length-1; i++){
  }
  if(input[i] === test){
    console.log("sucess");
  }else{
    console.log("fail")
  }
}

function sumArray(input){
  var add = 0;
  for(var i=0; i < input.length; i++){
    add = add + input[i]
  }  console.log(add)
}

function max(input){
  var high = input[0];
  for(var i=0; i < input.length; i++){
      if (high < input[i]) {
       high = input[i];
     }
   }console.log(high)
 }
