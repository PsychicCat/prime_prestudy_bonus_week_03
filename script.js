function something1 (x) {
	return x * 20;
}

function something2 (x) {
	if (x > 50) {
		x = 2000
	}
	return x;
}

function something3 (x) {
	return 2000 / x;

}

x = something1(something2(something3(20)));

console.log(x);