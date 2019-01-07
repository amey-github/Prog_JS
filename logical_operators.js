/*

NOTE : little fucked up, understand carefully

& logical AND			| logical OR
& short circuit AND		|| short circuit OR

*/

	var test = 5;
	if (test < 0 & ++test)
		console.log('& true');				// | Evals BOTH conditions, irrespective of 1st condition

	console.log(test + '\n');


	var test = 5;
	if (test < 0 && ++test)
		console.log('&& true');		// && Evals 2nd condition ONLY if 1st is true

	console.log(test + '\n');

// .....................................................................................................

	var test = -5;
	if (test < 0 | ++test)
		console.log('| true');				// | Evals BOTH conditions, irrespective of 1st condition

	console.log(test + '\n');


	var test = -5;
	if (test < 0 || ++test)
		console.log('|| true');		// || Evals 2nd condition ONLY if 1st is false

	console.log(test + '\n');

// .....................................................................................................

// USE OF short circuit AND/OR

	function nameFn(name){
		
		name = name || 'no name';			// Assigns 'no name' (default value) to var name if no arg passed
		console.log(name + '\n');			// If no default val assigned, output -- undefined
	}

	nameFn();
	nameFn('amey');