function reverseArray(array) {
  var arrayToReturn = [];
  for (var i = 0; i < array.length; i++) {
    arrayToReturn.unshift(array[i])
  }
  return arrayToReturn;
}

function reverseArrayInPlace(arrayVariable) {
  var tempHoldingArray = [];
  var arrayVariableLength = arrayVariable.length;
  for (var i = 0; i < arrayVariableLength; i++) {
    tempHoldingArray.unshift(arrayVariable.shift());
  }
  for (i = 0; i < arrayVariableLength; i++) {
    arrayVariable.push(tempHoldingArray.shift())
  }
  return;
}

/* The author's solution, shown below was more eloquent and efficient than mine, above 

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

*/

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
var newArray = [10, 11, 12, 13, 14, 15];
newArray = reverseArray(newArray);
console.log(newArray);
// → [15, 14, 13, 12, 11, 10]