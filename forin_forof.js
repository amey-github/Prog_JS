/*

for (variable in obj) -- loops through property NAMES ; iterable properties

for (variable of obj) -- loops through property VALUES ; iterable objects

*/

	let obj = { prop1: 'val1', prop2: 'val2'};

	let text = '';

	for (let pname in obj){

		text += obj[pname] + '\n';
		console.log(pname);
	};

	console.log('\n' + text);


// For array....................

	let arr = [3, 5, 7];
	arr.foo = 'hello';			// user-defined property

	for (var i in arr){			// property names
		console.log(i);
	};

	console.log();

	for (var i of arr){			// property values
		console.log(i);
	};