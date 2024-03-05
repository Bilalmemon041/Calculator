var operator = prompt('Enter operator ( either +, -, * or / ): ');


var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));

var result1 = (number1 + number2);
var result2 = (number1 - number2);
var result3 = (number1 * number2);
var result4 = (number1 / number2);



if (operator == '+') {
    alert (result1)
}
else if (operator == '-') {
   alert (result2)  
}
else if (operator == '*') {
    alert (result3) 
}
else if ( operator == "/") { 
   alert (result4)  
}
else { alert ("Please Choose Corrent Operatior First")
}







