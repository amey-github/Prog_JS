//console.log(notDeclared);

console.log(definedLater);			// 'undefined' as definedLater doesn't have a val assigned before being used

var definedLater;					// Declarations are 'Hoisted' on top of a program, i.e. are collected and executed first
definedLater = 'dL defined';		// Assignment/definition statements are not hoisted

console.log(definedLater);			// definedLater both declared and assigned, so desired output


console.log(definedSimultaneously);

var definedSimultaneously = 'dS defined';		// var definedSimultaneously -- is hoisted // = 'dS defined' -- not hoisted
console.log(definedSimultaneously);


exFunction();
function exFunction(){
	console.log('exFunction defined');
}

functionVar();								// not a function (TypeError)
var functionVar = function(){				// var functionVar -- hoisted // function(){..} -- not hoisted
	console.log('functionVar defined');
}

//functionVar();