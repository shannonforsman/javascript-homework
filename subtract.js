// subtract([10,10,10]);
// => -30


var subtract = function(arr) {

  counter = 0;

  for ( var i = 0; i < arr.length; i++) {

    counter = counter - arr[i];
  }

  console.log(counter)

}

subtract([10,10,10]);
