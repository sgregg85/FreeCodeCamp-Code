$(document).ready(function() {
  var input = "0";
  var history = "0";
  var result;
  $("#input").html(input);
  $("#history").html(history);
  
  
  $("#clear").on('click', clear);
  $("#divide").on('click', {operator: "/"}, clickOperator);
  $("#multiply").on('click', {operator: "*"}, clickOperator);
  $("#subtract").on('click', {operator: "-"}, clickOperator);
  $("#add").on('click', {operator: "+"}, clickOperator);
  $("#equal").on('click', equal);
  $("#decimal").on('click', {digit: "."}, clickDigitOrDecimal);
  $("#d0").on('click', {digit: "0"}, clickDigitOrDecimal);
  $("#d1").on('click', {digit: "1"}, clickDigitOrDecimal);
  $("#d2").on('click', {digit: "2"}, clickDigitOrDecimal);
  $("#d3").on('click', {digit: "3"}, clickDigitOrDecimal);
  $("#d4").on('click', {digit: "4"}, clickDigitOrDecimal);
  $("#d5").on('click', {digit: "5"}, clickDigitOrDecimal);
  $("#d6").on('click', {digit: "6"}, clickDigitOrDecimal);
  $("#d7").on('click', {digit: "7"}, clickDigitOrDecimal);
  $("#d8").on('click', {digit: "8"}, clickDigitOrDecimal);
  $("#d9").on('click', {digit: "9"}, clickDigitOrDecimal);

  
  
  
  function clear() {
    input = "0";
    history = "0";
    $("#input").html(input);
    $("#history").html(history)
  }
  
  function equal(){
    history += input;
    result = eval(history);
    history += " =";
    if(history.length > 45){
      $("#history").html("Input limit reached");
    } else {
      $("#history").html(history);
    }
    if(String(result).length > 16) {
      $("#input").html(result.toExponential(10));
    } else {
      $("#input").html(result);
    }
    
  }
  
  function clickOperator(event) {
    input += " " + event.data.operator + " ";
    if(history == "0") {
      history = input;
      $("#history").html(history);
    } else {
      if(history.length > 45) {
        history += eval(history);
        $("#history").html(history);
      } else {
        history += input;
        $("#history").html(history);
      }
    }
    input = "0";
    $("#input").html(input);
    
  }
  
  function clickDigitOrDecimal(event) {
    if(input == "0") {
      $("#input").html(event.data.digit);
      input = event.data.digit;
    } else {
      $("#input").append(event.data.digit);
      input += event.data.digit;
    }
    if(input.length > 16) {
      clear();
      $("#history").html("Input limit reached");
    }
  }
});
