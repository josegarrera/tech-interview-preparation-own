// function FindNeedle(haystack, needle) {
// 	let iter = 0;
// 	for (let i = 0; i < haystack.length; i++) {
// 		if (haystack[i] === needle[iter]) {
// 			if (iter === needle.length - 1) {
// 				return i - needle.length;
// 			}
// 			iter++;
// 		} else {
// 			iter = 0;
// 		}
// 	}
// 	return -1;
// }

function FindNeedle(haystack, needle) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack.slice(i, i + needle.length) === needle) {
			return i;
		}
	}
	return -1;
}

console.log(FindNeedle('rereredux', 'reredux'));

module.exports = FindNeedle;
