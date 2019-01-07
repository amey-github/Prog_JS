// condition ? true-exp : false-exp

	var age = 19;
	var condition = age >= 18;

	var result = (condition ? 'Adult' : 'Child');
	console.log(result + '\n');

// Running multiple statements if true/false...............

	var age = 14, check;
	var condition = age >= 18;

	condition ? (
		console.log('Adult'),		// NOTE -- No ; to terminate statements
		check = true
	):(
		console.log('Child'),
		check = false
	);

	console.log('condition is ' + check + '\n');

// Nested ternary operator..................................

	var age = 19;
	var condition1 = (age >= 18), condition2 = (age >= 21);

	condition1 ? (
		
		console.log('Adult'),
		condition2 ? console.log('Can drink') : console.log('Cannot drink')

	):(
		console.log('Child')
	);