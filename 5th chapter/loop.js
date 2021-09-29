function loop(zn,fn1,fn2,fn3){
	for (let i = zn; fn1(i); i = fn2(i)) 
		fn3(i);
}

loop(3, n=>n>0, n=>n-1, console.log);