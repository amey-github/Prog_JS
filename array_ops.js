/* NOTE.......

Array behaves weirdly with : arr + '\n'
console.log behaves weirdly if -- arr, '\n' -- is at the end

*/

var arr = [2, true, 'blah', 7800, 0];

// push() -- pushes an element to the end of arr

	console.log(arr.push('edit'));
	console.log(arr);					// changes original array

	console.log();

// pop() -- pops out last element of arr

	console.log(arr.pop());
	console.log(arr);					// changes orginal array

	console.log();

// concat() -- attaches 2 arrays end-to-end

	var ex = ['a', 'b', 'c'];
	console.log(arr.concat(ex));
	console.log(arr + '\n' + ex + '\n');		// does not change the original arrays

// join() -- joins using '' as seperator between elements

	console.log(arr.join(''));
	console.log(arr.join(', '));				// uses ', ' as seperator between elements
	
	console.log(arr);							// does not change array

// reverse() -- reverses array elements

	console.log(arr.reverse());
	console.log(arr);				// changes original array

	console.log();
	arr.reverse();

// shift() -- shift array elements 1 unit to the left

	console.log(arr.shift());		// returns element removed
	console.log(arr);				// changes original array

	console.log();

// unshift() -- adds element to beginning of array

	console.log(arr.unshift(2), arr);			// returns newArrayLength
	console.log(arr.unshift('a'), arr);			// changes original array

	console.log();

// slice() -- create a sub-array using INDEXES, similar to substring from string

	console.log(arr.slice(2, 5));		// starts at 2, slices out 5-2 = 3 elements, ends before 5
	console.log();						// does not change original array

// sort() -- sorts array

	console.log(arr.sort());
	console.log(arr);					// changes original array

	console.log();

// splice() -- removes elements, with option of replacing them, returns removed elements

	console.log(arr.splice(1, 2, 'replace'));	// starts at 1, removes 2 elements, replaces them with 'replace'
	console.log(arr);

	console.log();