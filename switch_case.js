// Prog to get day of week

var dayNum = new Date().getDay();				// Gives n for nth day of week
console.log('nth day of week - ' + dayNum);

var day = '';
switch (dayNum){

	case 0: day = 'Sun';
			break;

	case 1: day = 'Mon';
			break;

	case 2: day = 'Tue';
			break;

	case 3: day = 'Wed';
			break;

	case 4: day = 'Thurs';
			break;

	case 5: day = 'Fri';
			break;

	case 6: day = 'Sat';
			break;

	default: console.log('Oops! Error..');		// Executes if none of the case matches
}

console.log(day);