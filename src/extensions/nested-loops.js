const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]
for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i <= END; i++) {
  const array = []
  for (let j = 0; j < i; j++) {
    array.push(i) // Add i 'n' times.
  }
  nestedOne.push(array)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const array = []
  let m = i
  for (let j = 0; j < i; j++) {
    array.push(m)
    m--
  }
  nestedTwo.push(array)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let i = START; i <= END; i++) {
  const outerArray = []

  for (let j = START; j <= i; j++) {
    const innerArray = []

    for (let m = 0; m < j; m++) {
      innerArray.push(i)
    }
    outerArray.push(innerArray)
  }

  deepOne.push(outerArray)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let i = START; i <= END; i++) {
  const outerArray = []

  for (let j = START; j <= i; j++) {
    const innerArray = []

    for (let m = 1; m <= j; m++) {
      innerArray.push(m)
    }
    outerArray.push(innerArray)
  }

  deepTwo.push(outerArray)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = START; i <= END; i++) {
  const outerArray = []

  for (let j = START; j <= i; j++) {
    const innerArray = []

    for (let m = 1; m <= j; m++) {
      innerArray.push(m)
    }

    const sumOfSquares = innerArray.reduce(
      (sum, num) => sum + Math.pow(num, 2),
      0
    )
    const average = sumOfSquares / innerArray.length
    outerArray.push([average])
  }

  deepThree.push(outerArray)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
