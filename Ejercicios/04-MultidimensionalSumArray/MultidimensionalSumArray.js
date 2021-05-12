function mdArraySum(array) {
	let acc = 0;
	if (!array.length) return acc;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			acc = mdArraySum(array[i]) + acc;
		} else {
			acc = acc + array[i];
		}
	}
	return acc;
}

// let a = [1, [1, 1, [1, 1]]];
// console.log(mdArraySum(a));

// let b = [[2, 4], [1], [4, 2, 1]];
// console.log(mdArraySum(b));

// let c = [2, [3, 4], 5, [-3, [6, [4, 5]]]];
// console.log(mdArraySum(c));

module.exports = mdArraySum;
