// build a function that takes a number and then determines if that number is prime.

var primeNumber = function(num) {


for (var i = 1; i < num; i++) {

  if ( num === 2 ) {

    return "Yup, it's Prime!";

  }

  else if ( num%i === 0 ){

    return "not a prime number!";

  }

  else {

    return "Yup, it's Prime!";

  }

};

};

console.log(primeNumber(13));
