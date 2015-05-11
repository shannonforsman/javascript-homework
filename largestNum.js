// largest([1,9,7]);
// => 9


var largest = function(arr) {

  var large = arr[0];



  for (var i = 0; i < arr.length; i++) {

    if ( arr[i] > large) {
      large = arr[i];
    }

  }

  console.log(large)

}

largest([1,9,7]);
