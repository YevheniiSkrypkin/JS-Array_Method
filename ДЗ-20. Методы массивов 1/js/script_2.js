let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, 'a', 'b', 'c');

console.log(arr1);



//task 12
// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(1, 0, 'a', 'b');
// arr1.splice(6, 0, 'c');
// arr1.splice(8, 0, 'e');

// console.log(arr1);



//task 13
// let arr1 = [3, 4, 1, 2, 7];
// arr1.sort();

// console.log(arr1);



//task 14
// let arr1 = [5, 6, 7, 8, 9];
// let reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(arr1.reduce(reducer));



//task 15
// let arr1 = [5, 6, 7, 8, 9];
// let result = arr1.map(function(num) {
//     return num ** 2
// });
// console.log(result);



//task 16
// let arr1 = [1,-3, 5, 6,-7, 8, 9,-11]
// let result = arr1.filter (function (item) {
// 	return item < 0;
// });
// console.log(result)



//task 17
// let arr1 = [1,-3, 5, 6,-7, 8, 9,-11]
// let result = arr1.filter (function (item) {
// 	return item % 2 === 0;
// });
// console.log(result)



//task 18
// let arr1 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let result = arr1.filter (function(howLong) {
//     return howLong.length > 5
// })
// console.log(result);



//task 19
// let arr1 = [1, 2, [3, 4], 5, [6, 7]];
// let result = arr1.filter (function(ifArray) {
//     return Array.isArray(ifArray)
// })
// console.log(result);



//task 20
// let arr1 = [5,-3, 6,-5, 0,-7, 8, 9];
// let result = arr1.filter (function(min) {
//     return min < 0
// })
// console.log(result);