"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTwo = addTwo;
exports.addS = addS;
exports.map = map;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWxsQmFja0FuZEhpZ2hPcmRlckZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhZGRUd28iLCJudW0iLCJhZGRTIiwid29yZCIsIm1hcCIsImFyciIsImNiIiwicmVzdWx0IiwiaXRlbSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQW9CO0FBQzFCLFNBQU9BLEdBQUcsR0FBRyxDQUFiO0FBQ0E7O0FBRU0sU0FBU0MsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQzFCLFNBQU9BLElBQUksR0FBRyxHQUFkO0FBQ0E7O0FBRU0sU0FBU0MsR0FBVCxDQUFhQyxHQUFiLEVBQWlCQyxFQUFqQixFQUFvQjtBQUMxQixNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUQwQjtBQUFBO0FBQUE7O0FBQUE7QUFFMUIseUJBQW1CRixHQUFuQiw4SEFBd0I7QUFBQSxVQUFiRyxJQUFhO0FBQ3ZCRCxNQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUgsRUFBRSxDQUFDRSxJQUFELENBQWQ7QUFDQTtBQUp5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUsxQixTQUFPRCxNQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBDaGFsbGFnZSAxICovXG4vL0NyZWF0ZSBhIGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uLlxuLy9XaGVuIHRoYXQgY3JlYXRlZCBmdW5jdGlvbiBpcyBjYWxsZWQsIGl0IHNob3VsZCBwcmludCBcImhlbGxvXCIuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUd28obnVtKXtcblx0cmV0dXJuIG51bSArIDM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTKHdvcmQpIHtcblx0cmV0dXJuIHdvcmQgKyAncyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAoYXJyLGNiKXtcblx0bGV0IHJlc3VsdCA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG5cdFx0cmVzdWx0LnB1c2goY2IoaXRlbSkpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59Il19