//Build a function that takes an arbitrary number sequence and tries to find the next number in the sequence.


var sequence = function(arr) {

  var i = 0;
  var nextNum = arr[i+1];
  var lastNum = arr[arr.length-1];
  var a = nextNum/arr[i];
  var b = nextNum - arr[i]

  while (i < arr.length) {



    if (arr[i] + b === nextNum && nextNum + b === arr[i+2]){

       arr.push(lastNum + b)
     }

    else if (arr[i] * a === nextNum ){

      arr.push(lastNum * a );

    }

    i++
  }
    return arr[arr.length-1]
}

console.log(sequence([2,8,32]));
