function convertyr(){
  var userInput = prompt("please enter your amount of year's to be converted to Months, Weeks, Days, Hours, Minutes, Seconds")
  var months= userInput*12;
  var weeks = userInput*52;
  var days = userInput*365;
  var hours = days*24;
  var minutes = hours*60;
  var seconds = minutes*60;
  return alert("There are "+months+" months in "+userInput+" years"),
  alert("There are "+weeks+" weeks in "+userInput+" years"),
  alert("There are "+days+" days in "+userInput+" years"),
  alert("There are "+hours+" hours in "+userInput+" years"),
  alert("There are "+minutes+" minutes in "+userInput+" years"),
  alert("There are "+seconds+" seconds in "+userInput+" years")
}
function convertmnth(){
  var userInput = prompt("please enter your amount of Month's to be converted into Years, Weeks, Days, Hours, Minutes, Seconds")
  var year= (userInput/12).toFixed(2);
  var weeks = userInput*4;
  var days = userInput*30;
  var hours = days*24;
  var minutes = hours*60;
  var seconds = minutes*60;
  return alert(userInput+" months is approximatly "+year+" years"),
  alert("There are "+weeks+" weeks in "+userInput+" months"),
  alert("There are "+days+" days in "+userInput+" month's"),
  alert("There are "+hours+" hours in "+userInput+" month's"),
  alert("There are "+minutes+" minutes in "+userInput+" month's"),
  alert("There are "+seconds+" seconds in "+userInput+" month's")
}
function convertwk(){
  var userInput = prompt("please enter your amount of Week's to be converted to Year's, Months, Days, Hours, Minutes, Seconds")
  var year = (userInput/52).toFixed(2);
  var months= userInput/4;
  var days = userInput*7;
  var hours = days*24;
  var minutes = hours*60;
  var seconds = minutes*60;
  return alert(userInput+" week's is roughly "+year+" year's"),
  alert(userInput+" week's is roughly "+months+" Month's"),
  alert("There are "+days+" days in "+userInput+" years"),
  alert("There are "+hours+" hours in "+userInput+" week's"),
  alert("There are "+minutes+" minutes in "+userInput+" week's"),
  alert("There are "+seconds+" seconds in "+userInput+" week's")
}
function convertday(){
  var userInput = prompt("please enter your amount of day's to be converted to Year's, Months, Weeks, Hours, Minutes, Seconds")
  var years = (userInput/365).toFixed(2);
  var months= (userInput/30).toFixed(2);
  var weeks = (userInput/7).toFixed(2);
  var hours = userInput*24;
  var minutes = hours*60;
  var seconds = minutes*60;

  return alert(userInput+" day's is roughly "+years+" year's"),
  alert(userInput+" day's is roughly "+months+" Month's"),
  alert("There are "+weeks+" week's in "+userInput+" day's"),
  alert("There are "+hours+" hours in "+userInput+" day's"),
  alert("There are "+minutes+" minutes in "+userInput+" day's"),
  alert("There are "+seconds+" seconds in "+userInput+" day's")
}
function converthr(){
  var userInput = prompt("please enter your amount of hour's to be converted to Year's, Months, Weeks, Day's, Minutes, Seconds")
  var months= userInput*12;
  var weeks = userInput*52;
  var days = userInput*365;
  var hours = days*24;
  var minutes = hours*60;
  var seconds = minutes*60;
  return alert("There are "+months+" months in "+userInput+" hour's"),
  alert("There are "+weeks+" weeks in "+userInput+" hour's"),
  alert("There are "+days+" days in "+userInput+" hour's"),
  alert("There are "+hours+" hours in "+userInput+" hour's"),
  alert("There are "+minutes+" minutes in "+userInput+" hour's"),
  alert("There are "+seconds+" seconds in "+userInput+" hour's")
}
function convertmin(){
  var userInput = prompt("please enter your amount of minutes's to be converted to Year's Months, Weeks, Days, Hours, Seconds")
  var hours = (userInput/60).toFixed(2);
  var seconds = userInput*60;
  return alert("There are "+hours+" hours from "+userInput+" minutess"),
  alert("There are "+seconds+" seconds in "+userInput+" minute's")
}
