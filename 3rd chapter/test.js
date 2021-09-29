let MORSE_CODE = { 
	'-.-.--': '!',
	'.-..-.': '"',
	'...-..-': '$',
	'.-...': '&',
	'.----.': '\'',
	'-.--.': '(',
	'-.--.-': ')',
	'.-.-.': '+',
	'--..--': ',',
	'-....-': '-',
	'.-.-.-': '.',
	'-..-.': '/',
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'---...': ':',
	'-.-.-.': ';',
	'-...-': '=',
	'..--..': '?',
	'.--.-.': '@',
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'..--.-': '_',
	'...---...': 'SOS' 
};


function nod (arr) {
	for (var x = arr[0], i = 1; i < arr.length; i++) {
		let y = arr[i];
		while (x && y) 
			x > y ? x %= y : y %= x;
		x += y;
	}
	return x;
}


let decodeMorse = function(morseCode){
	let result = [], parse = morseCode.split('   ');
	for (let i = 0; i < parse.length; i++) {
			let tmpArr = parse[i].split(' '), tmpStr ='';
			for (let j = 0; j < tmpArr.length; j++){
				if (tmpArr[j].length)
					tmpStr += MORSE_CODE[tmpArr[j]];
			}
			if (tmpStr) 
				result.push(tmpStr);
	}
	return result.join(' ');
}


var decodeBits = function(bits){
	let countOne = 0, countZero = 0, iter = 1, result = '';
	let tmpObj = {},tmpData = [];
	while(bits.charAt(0) === '0') 
		bits = bits.substring(1);
	while(bits.charAt(bits.length-1) === '0')
		bits = bits.substring(0, bits.length-1);
	for (let i = 0; i < bits.length; i++) {
		if (bits[i] === '1') {
			countOne += 1;
			if (countZero) {
				tmpObj[iter] = countZero;
				iter+=1;
				countZero = 0;
			}
		} else if (bits[i] ==='0'){
			countZero += 1;
			if (countOne) {
				tmpObj[iter] = countOne;
				iter+=1;
				countOne = 0;
			}
		}
	}
	tmpObj[iter] = countOne;
	for (let key in tmpObj) {
		tmpData.push(tmpObj[key]);
	};
	
	let del = nod(tmpData);
	for (let key in tmpObj) {
		if (key % 2) {
			if (tmpObj[key] === 1 * del) 
				result+='.';
			if (tmpObj[key] === 3 * del) 
				result+='-';
		} else {
			if (tmpObj[key] === 1 * del) 
				result+='';
			if (tmpObj[key] === 3 * del) 
				result+=' ';
			if (tmpObj[key] === 7 * del)
				result+='   ';
		}
	}
	return result;
}


console.log(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')))