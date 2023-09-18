// You should implement your task here.
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

module.exports = function towelSort(matrix = []) {
    // const stringArray = [].concat(...matrix)
    // const resultString = '[' + stringArray.join(', ') + ']';
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].reverse();
        } else if (matrix == undefined) {
            return [];
        }
    }
    return matrix.flat();
};


// console.log(matrix.flat())
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

//   console.log(matrix.length)
//   let arr = []
//   let newarr = []
// for ( i = 0; i < matrix.length; i++){
//   let n = i + 1
//   n <= matrix.length
//   console.log(n)
// console.log([...matrix[i], ...matrix[n]])
// newarr = [...matrix[i]]
// };

// let arr = [].concat(...matrix)
// arr = JSON.toString(arr)

// console.log(arr)

// const flattenedArray = [].concat(...matrix);
// const resultString = '[' + flattenedArray.join(',\n ') + ']';

// console.log(resultString);
