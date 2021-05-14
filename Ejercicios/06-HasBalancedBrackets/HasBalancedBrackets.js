function HasBalancedBrackets(string) {
	const dictionary = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	let stack = [];
	for (let i = 0; i < string.length; i++) {
		if (dictionary[string[i]]) {
			stack.push(string[i]);
		} else {
			let last = stack.pop();
			if (dictionary[last] !== string[i]) {
				return false;
			}
		}
	}
	return !stack.length;
}

// O(n) temporal dónde n es el length del string
// O(n) espacial dónde n es la cantidad máxima de caracteres abiertos sin cerrar

module.exports = HasBalancedBrackets;
