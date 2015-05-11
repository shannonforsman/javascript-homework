// sum([1,2,3]);
// => 6


var sum = function(arr) {

  counter = 0;

  for ( var i = 0; i < arr.length; i++) {

    counter = counter + arr[i];
  }

  console.log(counter)

}

sum([1,2,3])
