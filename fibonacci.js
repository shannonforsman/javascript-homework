

var fibonacci = function(num) {

  var firstNum = 0;
  var secondNum = 1;
  var newNum = 1;

  while (newNum < num) {

    newNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = newNum;

    console.log(firstNum);
  }


}

console.log(fibonacci(8))
