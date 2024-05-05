function run() {
	console.log(Math.abs(-3)); // returns 3
	console.log(Math.abs(4)); // returns 4

	console.log(Math.acos(1));   // 0
	console.log(Math.acos(2));   // NaN

	console.log(Math.asin(0));   // 0
	console.log(Math.asin(2));   // NaN

	console.log(Math.atan(0));   // 0

	console.log(Math.cbrt(8));  // 2

	console.log(Math.ceil(1));  // 1
	console.log(Math.ceil(1.01));  // 2

	console.log(Math.floor(5.95));  // 5
	console.log(Math.floor(5));  // 5

	console.log(Math.hypot(3, 4)); // 5
	console.log(Math.hypot(5, 12)); // 13

	console.log(Math.max(1, 3, 2)); // 3
	console.log(Math.max(-1, -3, -2)); // -1

	console.log(Math.min(1, 3, 2)); // 1
	console.log(Math.min(-1, -3, -2)); // -2

	console.log(Math.pow(2, 3));    // 8
	console.log(Math.pow(7, 2));    // 49

	console.log(Math.round(5.95)); // 6
	console.log(Math.round(5.5)); // 6
	console.log(Math.round(5.05)); // 5

	console.log(Math.sqrt(4)); // 2
	console.log(Math.sqrt(9)); // 3

	console.log(Math.trunc(13.37)); // 13
	console.log(Math.trunc(-0.123)); // -0
	console.log(Math.trunc(0.123)); // 0
}