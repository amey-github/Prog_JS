var checkCondition = true;

// if..else if..else statements

if(checkCondition){
	console.log('True');
}

else {
	console.log('False');
};							// REMEMBER to put ';' in the end


/* COMPARISON OPERATORS

>	<	<=	>=	==	!=


==		Abstract equality
===		Strict equality

*/

// SIMILARITY.........

	if (5 == 5)
		console.log('true 5 == 5');

	if(5 === 5)
		console.log('true 5 === 5');

// DIFFERENCE.........

	if(5 == '5')
		console.log('true 5 == \'5\'');		// == uses TYPE CONVERSION before comparison

	if(5 === '5')
		console.log('true 5 === \'5\'');	// === does not use any such TYPE CONVERSION


	if('str' == new String('str'))
		console.log("true 'str' == new String('str')");		// 'str' is a string LITERAL, new String('str') is a string OBJECT

	if('str' === new String('str'))
		console.log("true 'str' === new String('str')");	// string literal and objct are different data types