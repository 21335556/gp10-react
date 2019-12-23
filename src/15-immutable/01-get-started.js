// JavaScript 中的对象般是可变的 (Mutable) ;因为使用了引用赋值，新的对象简单的引用了原始对象，改变新的对 象将影响到原始对象。虽然这样做可以节约内存，但当应用复杂后，这就造成了非常大的隐患。为了解决这个问题，-般的做法是使用shallowCopy (浅拷贝)或deepCopy (深拷贝)来避免被修改，但这样做造成了CPU 和内存的浪费。
//而Immutable Data 就是一旦创建，就不能再被更改的数据。对Immutable 对象的任何修改或添加删除操作都会返回一个新的Immutable 对象。Immutable 实现的原理是Persistent Data Structure (持久化数据结构)，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了Structural Sharing (结榪共享)，即如果对 象树中一个节点发生变化，只修改这个节点和受它影响的父节点， 其它节点则进行共享。
//使用Immutable注意以下几点:
//一Immmutable collection被当做值对待，而不是对象
// -任何修改会返回新的immutable collection
// -几乎所有的Array方法均可用在Immutable. List ;几乎所有的Map方法均可用在Imutable .Map; 几乎所有的Set方法均可用在Immutable . Set

const { Map } = require('immutable');

const map1 = Map({
  a: 1,
  b: 2,
  c: 3
});
const map2 = map1.set('b', 50);
console.log(map1.get('b') + " vs. " + map2.get('b'))
// 2 vs. 50