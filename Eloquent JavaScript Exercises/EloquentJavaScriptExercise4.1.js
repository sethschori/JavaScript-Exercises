function range(start, end, step) {
  var rangeArray = [];
  if (start <= end) {
    if (step === undefined)
      step = 1;
    for (var counter = start; counter <= end; counter += step)
      rangeArray.push(counter);
  } else {
    if (step === undefined)
      step = -1;
    for (var counter = start; counter >= end; counter += step)
      rangeArray.push(counter);
  }
  return rangeArray;
}

function sum(array) {
  var sumToReturn = 0;
  for (i = 0; i < array.length; i++)
    sumToReturn += array[i];
  return sumToReturn;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(5, 2, -2));
// → [5, 3]