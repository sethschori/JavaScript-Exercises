function arrayToList(array) {
  var list = {}; // NOTE: The author started with the <NULL> value here, which is smarter,
                 // because then you avoid needing the if statement below.
  for (var i = array.length - 1; i >= 0; i--)
    if (i === array.length - 1) {
      list = {value: array[i], rest: null};      
    } else {
      list = {value: array[i], rest: list};
    }
  return list;
}

function listToArray(list) {
  var array = [];
  while (list.rest !== null) {
    array.push(list.value)
    list = list.rest;
  }
  array.push(list.value);
  return array;
}

/* ==============================================
    Below is the author's solution, which uses
    an ingenious FOR loop that goes through
    all the sublists until the NODE variable is
    NULL, at which point the loop stops.

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}
   ============================================== */

function prepend(element, list) {
  list = {value: element, rest: list} 
  return list;  // Mine works, but the variable
}               // assignment is unnecessary.

// THIS IS THE NON-RECURSIVE VERSION OF THIS FUNCTION
// It was my first attempt at writing the function.
//
// function nth(list, number) {
//   for (var i = 0; i < number; i++)
//     list = list.rest;
//   return list.value;
// }

function nth(list, number) {
  if (number === 0)
    return list.value;
  else
    return nth(list.rest, number - 1);
}

/* =============================================
    Mine, above, works. However, I forgot to
    check whether the element doesn't exist.
    See the first IF in the author's program
    below for an example:

function nth(list, n) {
  if (!list)            //  <== I forgot to use
    return undefined;   //      this conditional
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
   ============================================= */

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20 


/* =====================================
   Below is some stuff when I was first
   playing around with these concepts 
   of linked lists and objects and was
   trying to wrap my head around it.
   ===================================== */

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

var list2 = {
  value: 0,
  rest: list
}

var list3 = {
  value: -1,
  rest: list2
}

// console.log(list3);
  
var newList = {}
newList.value = 1;
newList.rest = {};
newList.rest.value = 2;
newList.rest.rest = {};
newList.rest.rest.value = 3;
newList.rest.rest.rest = null;

//console.log(newList.rest.value);
//console.log(newList["rest"]["value"]);