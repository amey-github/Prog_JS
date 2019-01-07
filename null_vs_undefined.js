/*	UNDEFINED

When var has been declared but has not been assigned ay value
It is automatically said to be undefined
‘undefined’ is a variable type 

*/

	var test;
	console.log(test);
	console.log(typeof(null));

	console.log();

/*	NULL

A var can be assigned the value 'null' -- represents ‘no value’
'null' has to be specifically assigned to a var
'null' is an object value

*/

	var test = null;
	console.log(test);
	console.log(typeof(undefined));

	console.log();

// Some properties of null....

	console.log(null);
	console.log(!null);
	console.log(!!null);

	console.log();
	
// Interesting stuff..........

	console.log(null === undefined);
	console.log(null == undefined);

console.log();

	console.log(null + 1);			// null is mapped as zero in addition
	console.log(undefined + 1);		// NaN -- Not a Number