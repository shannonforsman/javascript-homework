
//smallest([20,19,40]);
// => 19



var smallest = function(arr) {

  var small = arr[0];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] < small ) {

      small = arr[i];

    }

  }
  console.log(small)
}


smallest([20,19,40]);
