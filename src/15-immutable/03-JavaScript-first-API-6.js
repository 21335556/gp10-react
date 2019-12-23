const { Map, List } = require('immutable')

const mapped = Map({ a: 1, b: 2, c: 3 })
// ES2015
const mapped = foo.map(x => x * x);
// ES5
var mapped = foo.map(function (x) { return x * x; });
console.log(mapped);

const { List } = require('immutable');
const aList = List([ 1, 2, 3 ]);
const anArray = [ 0, ...aList, 4, 5 ]; // [ 0, 1, 2, 3, 4, 5 ]
console.log(anArray);