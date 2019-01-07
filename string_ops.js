// BASIC STRING OPS....................

var strVar = 'This is a string variable';
console.log(strVar);

var escSeq = 'For example, \"Escape seq used to retain double quotes\"';
console.log(escSeq);


var fname = 'Amey', lname = 'Shitole';

var concatStr = fname + lname ;
console.log(concatStr);

fname += lname;
console.log(fname);

// STRINGS : [bracket notation].........

console.log(fname[0]);
console.log(fname.length);


// 20 STRING METHODS....................

var x = 'Hello there\n', y = 'My name is Amey';

	
	// charAt()	
		console.log(x.charAt(1) + x.charAt(6));

	// charCodeAt() - gives Unicode representatn of char
		console.log(x.charCodeAt(1));

	// concat()
		console.log(x.concat(y));

	// endsWith()
		console.log(x.endsWith('there')); 		// As '\n' is counted as a char
		console.log(y.endsWith('amey'));

	// fromCharCode() - gives char repr of Unicode val
		console.log(String.fromCharCode(101));

	// includes()
		console.log(x.includes('lo th'));
		console.log(y.includes('meis'));		// As ' ' (space) is counted as a char

	// indexOf() - returns 1st found occurence
		console.log(x.indexOf('me'));			// returns -1 if does not exist
		console.log(y.indexOf('me'));

	// lastIndexOf()
		console.log(y.lastIndexOf('me'));

	// match()
		console.log(y.match(/me/g)); 			// It's a regular expression - Read from docs (Coz it's useful shit)
		console.log(y.match('me'));

	// repeat()
		console.log(x.repeat(3));

	// replace()
		console.log(y.replace('me', 'ME'));		// replaces only the 1s occurence
		console.log(y.replace(/me/g, 'ME'));	// Use of reg exp; spl char 'g' means globally

	// search() - returns 1st found occurence
		console.log(y.search(/me/));			// Equiv to y.search('me')
		console.log(y.search(/me/g));

	// slice(startIndex, postEndIndex)
		console.log(x.slice(6, 9));				// Starts 6, end at 9-1 = 8

	//split()
		console.log(x.split(' '));				// Splits when ' ' occurs
		console.log(x.split('e'));				// Splits when 'e' occurs

	// startsWith()
		console.log(x.startsWith('Hel'));

	// substr(startIndex, substrLen)
		console.log(x.substr(6,3));				// Works similar to slice(), difference in args passed

	// substring(startIndex, postEndIndex)
		console.log(x.substring(6, 9));

	// toLowerCase()
		console.log(y.toLowerCase());

	// toUpperCase()
		console.log(y.toUpperCase());

	// trim() - trims off whitespaces from beginning and end of string
		var z = '	Trim da..	';
		console.log(z + x);
		console.log(z.trim() + x);