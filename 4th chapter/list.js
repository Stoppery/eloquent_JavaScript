// let list = {
// 	value : 1,
// 	rest : {
// 		value : 2,
// 		rest : {
// 			value : 3,
// 			rest : null
// 		}
// 	}
// };


// console.log(list);


let arrayToList = (arr) => {
	let list = null;
	for (let i = arr.length - 1; i >= 0; i--)
		list = {value: arr[i], rest: list};
	return list;
};

let listToArray = (list) => {
	let arr = [];
	for (let i = list; i; i = i.rest)
		arr.push(i.value);
	return arr;
};

let prepend = (elem, list) => {
	return {value : elem, rest : list};
};


let nth = (list, num) => {
	if (!list) 
		return undefined;
	else if(num == 0)
		return list.value;
	else
		return nth(list.rest, num - 1);
};