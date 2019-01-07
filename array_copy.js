var arr = [2, true, 'blah', 7800, 0], copy = [];

// SHALLOW copying

	// slice()

		copy = arr.slice(0);
		console.log(arr);
		console.log(copy);

		console.log();

	// spread operator

		var arr = [2, true, 'blah', 7800, 0], copy = [];

		copy = [...arr];
		console.log(copy);

		console.log();

// DEEP copying -- to be done whenever an object or an array is present in an array

	var deepArr = [['item'], 2, true, 'blah'];		
	var shallowCopy, deepCopy;

	shallowCopy = deepArr.slice(0);
	shallowCopy[0].push(55);

	console.log(deepArr);
	console.log(shallowCopy);

		/*
		pushes 55 into both as when an deepArr contains an object or array
		they are present as POINTERS to the array/object element
		shallowCopy simply copies thee pointer to deepArr
		so the change -- push() -- made is to the address of the deepArr element
		*/

	console.log();

	var deepArr = [['item'], 2, true, 'blah'];

	console.log(typeof JSON.stringify(deepArr));
	/*
	JSON.stringify() converts deepArr to string
	JSON.parse() converts string back to array (object) form
	*/

	console.log();

	deepCopy = JSON.parse(JSON.stringify(deepArr));
	deepCopy[0].push(55);

	console.log(deepArr);
	console.log(deepCopy);