// BOOLEAN.....................

var data = false;

if (data)
	console.log('Boolean val is ' + data);

else
	console.log('Boolean val is ' + data);


// NULL........................

var nullVal = null;

console.log(nullVal);
console.log(nullVal*100);


// UNDEFINED...................

var a;
console.log(a + 2);	// Error : NaN (Not a Number) as no val assigned


// NUMBER......................

var num = 3.4;
console.log(num);


// STRING......................

var myName = 'Amey';
console.log('My name is ' + myName);


// SYMBOL......................

var sym1 = Symbol('foo');
var sym2 = Symbol('foo');

console.log (sym1 === sym2);
console.log (String(sym1) === String(sym2));

	/*
	The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done
	So the types must be the same to be considered equal.

	The == operator will compare for equality after doing any necessary type conversions.
	The === operator will not do the conversion, so if two values are not the same type === will simply return false
	*/

console.log(String(sym1));


// OBJECT.......................

var myObj = new Object();
myObj.val = 1;
myObj.detail = 'One';

console.log(myObj);