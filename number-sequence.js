//Build a function that takes following number sequence `1, 2, 4, 8, 16, 32` and computes the next number in the sequence.


var sequence = function(arr) {

  var i = 0;

  var nextNum = arr[i+1];
  var lastNum = arr[arr.length-1];


  while (i < arr.length) {

    if ( (arr[i] * 2) === nextNum){


      arr.push(lastNum * 2);
      console.log(arr);

    };

    i++
    
  }

}

console.log(sequence([1,2,4,8,16,32]));
