// function MaxValue(shares) {
// 	let profit = Number.NEGATIVE_INFINITY;
// 	for (let i = 0; i < shares.length - 1; i++) {
// 		for (let j = i + 1; j < shares.length; j++) {
// 			if (shares[j] - shares[i] > profit) {
// 				profit = shares[j] - shares[i];
// 			}
// 		}
// 	}
// 	if (profit <= 0) {
// 		return 0;
// 	} else {
// 		return profit;
// 	}
// }

function MaxValue(shares) {
	minPrice = shares[0];
	profit = shares[1] - shares[0];
	for (let i = 1; i < shares.length; i++) {
		if (shares[i] < minPrice) {
			minPrice = shares[i];
		}
		profit = profit > shares[i] - minPrice ? profit : shares[i] - minPrice;
	}
	if (profit <= 0) {
		return 0;
	} else {
		return profit;
	}
}

// let shares = [4, 3, 2, 5, 11];
// let shares = [4, 3, 2, 1];
let shares = [23, 7, 3, 4, 8, 6];

console.log(MaxValue(shares));

module.exports = MaxValue;
