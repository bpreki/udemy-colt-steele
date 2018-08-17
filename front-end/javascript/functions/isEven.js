function isEven(num) {
  if(num % 2 == 0){
    return true;
  }else{
    return false;
  }

}
function factorial(num){
  var result=1
  for(i = 2; i <= num; i++){
    result *= i;
  }
  return result
}
function kebabToSnake(str){
  str = str.replace(/\W/g, "_");
   return str
}
