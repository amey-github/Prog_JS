/* NOTE.......

Array behaves weirdly with : arr + '\n'
console.log behaves weirdly if -- arr, '\n' -- is at the end

*/


// Arrays can store strings, numbers, booleans, objects......

	var arr = ['item1', 'item2', 'item3', 25, false];

	console.log((typeof arr), '\n');		// ARRAYS are of type OBJECT

	console.log(arr[0]);
	console.log(arr[3]);

	console.log();

	arr[2] = 2;
	console.log(arr);		// Changing arrray values

	console.log();

	arr.forEach(function(element) {
		console.log(element);
	});

	console.log();

// Nested arrays -- Multi dimensional arrays..................

	var nestedArray = [['item1', 33], ['item2', 101], [false, 'dumb']];

	console.log(nestedArray[0]);
	console.log(nestedArray[2][0]);

	console.log();

	nestedArray[2][1] = 'smart';
	console.log(nestedArray);

	console.log();

	nestedArray.forEach(function(element) {
		console.log(element);
	});