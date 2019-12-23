const { Seq } = require('immutable');
const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x => {
    console.log('filterx:' + x)
    return x % 2 !== 0
  })
  .map(x => {
    console.log('map x:' + x)
    return x * x
  });

console.log(oddSquares.get(1))

// filterx:1
// filterx:2
// filterx:3
// map x:3
// 9