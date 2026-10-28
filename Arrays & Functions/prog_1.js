// forEach() => method used to iterate over the  elements of the array and apply a specified function (callback) to each element

// Syntax : array.forEach(callback)
// element,index,array

let numbers = [1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function double(element,index,numbers){
    numbers[index] = element * 2;
}




let fruits = ["apple","banana", "orange", "coconut"]
fruits.forEach(capitalise)
fruits.forEach(display)

function upperCase(element,index,fruits){
    fruits[index] = element.toUpperCase();
}

function capitalise(element,index,fruits){
    fruits[index] = element.charAt(0).toUpperCase() + element.slice(1);
}