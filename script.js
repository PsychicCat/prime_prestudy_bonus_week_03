function something1 (x) {
	x = x * 20;
	return x;
}

function something2 (x) {
	if (x > 50) {
		x = 2000
	}
	return x;
}

function something3 (x) {
	x = 2000 / x;
	return x;
}

x = something1(something2(something3(20)));

console.log(x);