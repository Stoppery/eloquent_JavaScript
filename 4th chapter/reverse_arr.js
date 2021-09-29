let reverseArray = (arr) => {
	let newArr = [];
	for (let i = arr.length-1; i >= 0; i--) newArr.push(arr[i]);
	return newArr;
};

let reverseArrayInPlace = (arr) => {
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		let tmp = arr[i];
		arr[i] = arr[(arr.length - 1) - i];
		arr[(arr.length - 1) - i] = tmp;
	}
	return arr;
};

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);