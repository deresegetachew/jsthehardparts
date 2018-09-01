/**** Challage 1 */
//Create a function createFunction that creates and returns a function.
//When that created function is called, it should print "hello".

export function addTwo(num){
	return num + 3;
}

export function addS(word) {
	return word + 's';
}

export function map(arr,cb){
	let result = [];
	for (const item of arr) {
		result.push(cb(item));
	}
	return result;
}