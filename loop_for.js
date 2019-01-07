/*

for (initialization ; condition ; iteration){
	body-of-loop;
}

	1. initialization
	2. condition
	3. body-of-loop
	4. iteration
*/

var arr = [];

for (var i = 0; i < 5; i++) {
	arr.push(i);
}

console.log(arr);

for (var i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * 10;
}

console.log(arr);

/*

break
- remaining loop-body doesn't execute
- control breaks out of INNER-MOST loop

continue
- remaining loop-body doesn't execute
- control goes to next iteration of loop
- for(), while(), do statement -- for diff loops

*/