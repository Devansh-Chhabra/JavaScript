// filter() => method is used to iterate over the elements and apply the specified function and filter elements into new array

// Syntax : array.filter(callback)
// element

let names = ["devansh","raghav","varun","naman","saket"]
let shortNamesPerson = names.filter(shortNames);

function shortNames(element){
    return element.length < 6;
}
console.log(shortNamesPerson)