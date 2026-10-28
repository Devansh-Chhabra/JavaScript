// reduce() => method is used to convert the array into single element by applying the specified function(callback)

// Syntax : array.reduce(callback)
// accumulator, element

const numbers = [,1,2,3,4,5,6,7]
let totalSum = numbers.reduce(total);
function total(accumulator,element){
    return accumulator + element;
}
console.log(totalSum);

const largestNum = numbers.reduce(maxNum);
function maxNum(accumulator,element){
    return Math.max(accumulator,element);
}
console.log(largestNum);