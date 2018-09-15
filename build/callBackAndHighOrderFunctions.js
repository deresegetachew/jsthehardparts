"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTwo = addTwo;
exports.addS = addS;
exports.map = map;
exports.forEach = forEach;
exports.mapWith = mapWith;
exports.reduce = reduce;
exports.intersection = intersection;
exports.union = union;
exports.objectOfMatches = objectOfMatches;
exports.multiMap = multiMap;

/**** Challage 1 */
//Create a function createFunction that creates and returns a function.
//When that created function is called, it should print "hello".
function addTwo(num) {
  return num + 3;
}

function addS(word) {
  return word + 's';
}

function map(arr, cb) {
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      result.push(cb(item));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

function forEach(arr, cb) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;
      cb(item);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
} // only works for mutable types
//wont work for immutable types / primitive types like string and int.


function mapWith(arr, cb) {
  var result = JSON.parse(JSON.stringify(arr));
  forEach(result, cb);
  return result;
}

function reduce(array, cb, initialValue) {
  if (initialValue == undefined) throw new Error("initial value not defined");else {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var val = _step3.value;
        initialValue = cb(val, initialValue);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return initialValue;
  }
}

function intersection(arg) {
  var paramArr = [];
  var arr = [];
  var argLength = arguments.length;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = arguments[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _arr = _step4.value;
      paramArr = paramArr.concat(_arr);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  var cb = function cb(val, result) {
    //let firstElem = paramArr.shift();
    for (var i = 1; i < argLength; i++) {
      paramArr.splice(paramArr.indexOf(val), 1);
    }

    if (paramArr.includes(val)) result.push(val);
    return result;
  };

  return reduce(Object.assign(arr, paramArr), cb, []);
}

function union(arg) {
  var paramArr = [];
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = arguments[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var arr = _step5.value;
      paramArr = paramArr.concat(arr);
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  var cb = function cb(val, result) {
    var elem = paramArr[paramArr.indexOf(val)];
    if (!result.includes(elem)) result.push(elem);
    return result;
  };

  return reduce(paramArr, cb, []);
}

function objectOfMatches(arr1, arr2, cb) {
  var result = {};
  return reduce(arr1, cb, result);
}

function multiMap(arrValues, arrCb) {
  // return forEach(arrCb,(cb)=>{
  // 	console.log(map(arrvalues,cb));
  // });
  var result = {};
  forEach(arrValues, function (val) {
    result[val] = [];
    forEach(arrCb, function (cb) {
      result[val].push(cb(val));
    });
  });
  return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWxsQmFja0FuZEhpZ2hPcmRlckZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhZGRUd28iLCJudW0iLCJhZGRTIiwid29yZCIsIm1hcCIsImFyciIsImNiIiwicmVzdWx0IiwiaXRlbSIsInB1c2giLCJmb3JFYWNoIiwibWFwV2l0aCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInJlZHVjZSIsImFycmF5IiwiaW5pdGlhbFZhbHVlIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJ2YWwiLCJpbnRlcnNlY3Rpb24iLCJhcmciLCJwYXJhbUFyciIsImFyZ0xlbmd0aCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbmNhdCIsImkiLCJzcGxpY2UiLCJpbmRleE9mIiwiaW5jbHVkZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ1bmlvbiIsImVsZW0iLCJvYmplY3RPZk1hdGNoZXMiLCJhcnIxIiwiYXJyMiIsIm11bHRpTWFwIiwiYXJyVmFsdWVzIiwiYXJyQ2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUMzQixTQUFPQSxHQUFHLEdBQUcsQ0FBYjtBQUNBOztBQUVNLFNBQVNDLElBQVQsQ0FBY0MsSUFBZCxFQUFvQjtBQUMxQixTQUFPQSxJQUFJLEdBQUcsR0FBZDtBQUNBOztBQUVNLFNBQVNDLEdBQVQsQ0FBYUMsR0FBYixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUIsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFENEI7QUFBQTtBQUFBOztBQUFBO0FBRTVCLHlCQUFtQkYsR0FBbkIsOEhBQXdCO0FBQUEsVUFBYkcsSUFBYTtBQUN2QkQsTUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlILEVBQUUsQ0FBQ0UsSUFBRCxDQUFkO0FBQ0E7QUFKMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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b3VyY2VzQ29udGVudCI6WyIvKioqKiBDaGFsbGFnZSAxICovXG4vL0NyZWF0ZSBhIGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uLlxuLy9XaGVuIHRoYXQgY3JlYXRlZCBmdW5jdGlvbiBpcyBjYWxsZWQsIGl0IHNob3VsZCBwcmludCBcImhlbGxvXCIuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUd28obnVtKSB7XG5cdHJldHVybiBudW0gKyAzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUyh3b3JkKSB7XG5cdHJldHVybiB3b3JkICsgJ3MnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKGFyciwgY2IpIHtcblx0bGV0IHJlc3VsdCA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG5cdFx0cmVzdWx0LnB1c2goY2IoaXRlbSkpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFyciwgY2IpIHtcblx0Zm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcblx0XHRjYihpdGVtKTtcblx0fVxufVxuXG5cbi8vIG9ubHkgd29ya3MgZm9yIG11dGFibGUgdHlwZXNcbi8vd29udCB3b3JrIGZvciBpbW11dGFibGUgdHlwZXMgLyBwcmltaXRpdmUgdHlwZXMgbGlrZSBzdHJpbmcgYW5kIGludC5cbmV4cG9ydCBmdW5jdGlvbiBtYXBXaXRoKGFyciwgY2IpIHtcblx0bGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG5cdGZvckVhY2gocmVzdWx0LCBjYik7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2UoYXJyYXksIGNiLCBpbml0aWFsVmFsdWUpIHtcblx0aWYgKGluaXRpYWxWYWx1ZSA9PSB1bmRlZmluZWQpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiaW5pdGlhbCB2YWx1ZSBub3QgZGVmaW5lZFwiKTtcblx0ZWxzZSB7XG5cdFx0Zm9yIChjb25zdCB2YWwgb2YgYXJyYXkpIHtcblx0XHRcdGluaXRpYWxWYWx1ZSA9IGNiKHZhbCwgaW5pdGlhbFZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIGluaXRpYWxWYWx1ZTtcblx0fVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbihhcmcpIHtcblx0bGV0IHBhcmFtQXJyID0gW107XG5cdGxldCBhcnIgPSBbXTtcblx0bGV0IGFyZ0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cblx0Zm9yIChjb25zdCBhcnIgb2YgYXJndW1lbnRzKSB7XG5cdFx0cGFyYW1BcnIgPSBwYXJhbUFyci5jb25jYXQoYXJyKTtcblx0fVxuXG5cdGxldCBjYiA9ICh2YWwsIHJlc3VsdCkgPT4ge1xuXHRcdC8vbGV0IGZpcnN0RWxlbSA9IHBhcmFtQXJyLnNoaWZ0KCk7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcmdMZW5ndGg7IGkrKykge1xuXHRcdFx0cGFyYW1BcnIuc3BsaWNlKHBhcmFtQXJyLmluZGV4T2YodmFsKSwgMSk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmFtQXJyLmluY2x1ZGVzKHZhbCkpXG5cdFx0XHRyZXN1bHQucHVzaCh2YWwpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRyZXR1cm4gcmVkdWNlKE9iamVjdC5hc3NpZ24oYXJyLCBwYXJhbUFyciksIGNiLCBbXSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uKGFyZykge1xuXHRsZXQgcGFyYW1BcnIgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGFyciBvZiBhcmd1bWVudHMpIHtcblx0XHRwYXJhbUFyciA9IHBhcmFtQXJyLmNvbmNhdChhcnIpO1xuXHR9XG5cblx0bGV0IGNiID0gKHZhbCwgcmVzdWx0KSA9PiB7XG5cdFx0bGV0IGVsZW0gPSBwYXJhbUFycltwYXJhbUFyci5pbmRleE9mKHZhbCldO1xuXHRcdGlmICghcmVzdWx0LmluY2x1ZGVzKGVsZW0pKVxuXHRcdFx0cmVzdWx0LnB1c2goZWxlbSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRyZXR1cm4gcmVkdWNlKHBhcmFtQXJyLCBjYiwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0T2ZNYXRjaGVzKGFycjEsIGFycjIsIGNiKSB7XG5cdGxldCByZXN1bHQgPSB7fTtcblx0cmV0dXJuIHJlZHVjZShhcnIxLCBjYiwgcmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpTWFwKGFyclZhbHVlcyxhcnJDYil7XG5cdC8vIHJldHVybiBmb3JFYWNoKGFyckNiLChjYik9Pntcblx0Ly8gXHRjb25zb2xlLmxvZyhtYXAoYXJydmFsdWVzLGNiKSk7XG5cdC8vIH0pO1xuXHRsZXQgcmVzdWx0ID0ge307XG5cdGZvckVhY2goYXJyVmFsdWVzLCh2YWwpPT57XG5cdFx0cmVzdWx0W3ZhbF0gPSBbXTtcblx0XHRmb3JFYWNoKGFyckNiLChjYikgPT4ge1xuXHRcdFx0cmVzdWx0W3ZhbF0ucHVzaChjYih2YWwpKTtcblx0XHR9KTtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59Il19