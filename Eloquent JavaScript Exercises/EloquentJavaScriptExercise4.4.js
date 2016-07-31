function deepEqual(val1, val2) {
	if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
		var count1 = 0;
		var count2 = 0;
		for (var properties1 in val1) {
			count1++;
		}
		for (var properties2 in val2) {
			count2++;
		}
	if (count1 === count2) {
		for (var propsVal1 in val1) {
			return deepEqual(val1[propsVal1], val2[propsVal1]);
		}
	}
//		return deepEqual(var properties in val1, var props in val2);
	} else if (val1 === val2) {
		return true;
	} else {
		return false;
	}
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, null));
// → true
console.log(deepEqual({here: 1, banana: 33}));
// → false