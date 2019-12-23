const { List } = require('immutable');
const list1 = List([1, 2]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
// assert.equal(list1.size, 2);
// assert.equal(list2.size, 5);
// assert.equal(list3.size, 6);
// assert.equal(list4.size, 13);
// assert.equal(list4.get(0), 1);
console.log(list1.size === 2);
console.log(list2.size === 5);
console.log(list3.size === 6);
console.log(list4.size === 13);
console.log(list1);
console.log(list2);
console.log(list3);
console.log(list4);
// true
// true
// true
// true
// List [ 1, 2 ]
// List [ 1, 2, 3, 4, 5 ]
// List [ 0, 1, 2, 3, 4, 5 ]
// List [ 1, 2, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5 ]