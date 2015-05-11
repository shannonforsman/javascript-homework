//average([10,20,30]);
// => 20


var average = function(arr) {

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {

    sum = sum + arr[i];

  }

  var av = sum/arr.length;
  console.log(av)

}


average([10,20,30]);
