// random() -- generates a number from [0, 1), 0 included, 1 excluded

	console.log(Math.random());
	console.log(Math.floor(Math.random()*100) + '\n');		// gives random number 0-99


	function randomRange(min, max){					// gives random number from [min, max), min included, max excluded

		return Math.floor( Math.random() * (max - min + 1) + min);
	}

	console.log(randomRange(15, 44) + '\n');


// parseInt() -- converts arg to integer data type

	console.log(parseInt('011'));		// converts 11 to int with base 10 (DEFAULT)
	console.log(parseInt('011', 2));	// converts 11 to int with base 2

	console.log(parseInt('fk12'));		// prints NaN (Not a Number)