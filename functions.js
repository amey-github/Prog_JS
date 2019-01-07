function squareFn(a){
	return (a * a);
}

console.log(squareFn(3));			// Calling function


function addSquares(x, y){

	function squareFn(z){				// squareFn is private to addSquares
		return z * z;
	}
	return squareFn(x) + squareFn(y);	// Nested function
}

console.log(addSquares(3, 4));


var globalVar = 'I\'m global';
var strVar = 'Global str variable';		// As it is defined before the function

function printVar(){

	var localVar = 'I\'m local';

	var strVar = 'Local str variable';		// Local variable has precedence over global variable
	console.log(strVar);
	console.log(globalVar);
}

printVar();			// Calling function 

console.log(strVar);
//console.log(localVar);		// localVar has no scope here