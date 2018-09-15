/**** Challage 1 */
//Create a function createFunction that creates and returns a function.
//When that created function is called, it should print "hello".

export function addTwo(num) {
	return num + 3;
}

export function addS(word) {
	return word + 's';
}

export function map(arr, cb) {
	let result = [];
	for (const item of arr) {
		result.push(cb(item));
	}
	return result;
}

export function forEach(arr, cb) {
	for (let item of arr) {
		cb(item);
	}
}


// only works for mutable types
//wont work for immutable types / primitive types like string and int.
export function mapWith(arr, cb) {
	let result = JSON.parse(JSON.stringify(arr));
	forEach(result, cb);
	return result;
}

export function reduce(array, cb, initialValue) {
	if (initialValue == undefined)
		throw new Error("initial value not defined");
	else {
		for (const val of array) {
			initialValue = cb(val, initialValue);
		}
		return initialValue;
	}

}

export function intersection(arg) {
	let paramArr = [];
	let arr = [];
	let argLength = arguments.length;

	for (const arr of arguments) {
		paramArr = paramArr.concat(arr);
	}

	let cb = (val, result) => {
		//let firstElem = paramArr.shift();
		for (let i = 1; i < argLength; i++) {
			paramArr.splice(paramArr.indexOf(val), 1);
		}

		if (paramArr.includes(val))
			result.push(val);

		return result;
	};

	return reduce(Object.assign(arr, paramArr), cb, []);
}

export function union(arg) {
	let paramArr = [];

	for (const arr of arguments) {
		paramArr = paramArr.concat(arr);
	}

	let cb = (val, result) => {
		let elem = paramArr[paramArr.indexOf(val)];
		if (!result.includes(elem))
			result.push(elem);
		return result;
	};

	return reduce(paramArr, cb, []);
}

export function objectOfMatches(arr1, arr2, cb) {
	let result = {};
	return reduce(arr1, cb, result);
}

export function multiMap(arrValues,arrCb){
	// return forEach(arrCb,(cb)=>{
	// 	console.log(map(arrvalues,cb));
	// });
	let result = {};
	forEach(arrValues,(val)=>{
		result[val] = [];
		forEach(arrCb,(cb) => {
			result[val].push(cb(val));
		});
	});
	return result;
}

