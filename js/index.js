$(document).ready(function () {

  var calculator = $('.calculator');
  var calcDisplay = calculator.find('.calc-input');
  var keys = calculator.find('.key');
  var calcButton = calculator.find('.button');
  var clearButton = calculator.find('.clear');
  var result = calculator.find('.equal');
  var currentKey;
  var input;
  var operators;

  keys.each(function(){
    currentKey = $(this).attr('value');
    $(this).text(currentKey); 

  });

  calcButton.on('click', function(){
    var val = $(this).text();
    var inputString = calcDisplay.val() + $(this).attr('value');
    operators = ["+", "/", "*", ".", "-"];
    input = $(".calc-input").val();
    var inputLength = input.length;
    if (operators.indexOf(val) !== -1 && operators.includes(input[input.length - 1]) === true) {
      return;
    }
    else if(inputLength > 20) {
      console.log("Input length exceeded");
    }
    else if($.isNumeric(inputString.charAt(0)) || inputString.charAt(0) == '-') {
      calcDisplay.val(inputString);
    }    
    else {
      calcDisplay.val('');
    }
  });

  clearButton.on('click', function () {
    calcDisplay.val('');
  });

  result.on('click', function () {
    calcDisplay.val(eval(calcDisplay.val()));
  });
});