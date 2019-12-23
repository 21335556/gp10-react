const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 2); // Set to same value
map1 == map2 // true
map1 === map2 // true