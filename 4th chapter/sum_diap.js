let range = (start, end, step = 1) => {
	let arr = [];
	if (step > 0) {
		for (let i = start; i <= end; i+=step) arr.push(i);
	} else {
		for (let i = start; i >= end; i+=step) arr.push(i);
	}
	
	console.log(arr);
	return arr;
};

let sum = (arr) => {
	let tmp = 0;
	arr.forEach(element => {
		tmp += element;
	});
	return tmp;
};

console.log(sum(range(5,2,-1)));