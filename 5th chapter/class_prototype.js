// function Rabit(type) {
// 	this.type = type;
// }

// Rabit.prototype.say = function(line){
// 	console.log(`${this.type} says ${line}`);
// }

// let test = new Rabit('Выжла');

// более новая форма записи того что выше:

class Rabit {
	constructor(type){
		this.type = type;
	}
	say(line){
		console.log(`${this.type} says ${line}`);
	}
}

let killerRabit = new Rabit('Убийца');
let funnyRabit = new Rabit('Забавный');

console.log(killerRabit);