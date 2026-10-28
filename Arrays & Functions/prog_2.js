// .map() => iterate over the  elements of the array and apply a specified function (callback) to each element without modifying the original 

// Syntax : array.map(callback)
// element

const fruits = ["apple","orange","banana","coconut"]
const newFruits = fruits.map(upperCase);
function upperCase(element){
    return element.toUpperCase()
}
console.log(newFruits);


const dates = ["2024-1-10","2025-2-20","2026-3-30"]
const formattedDates = dates.map(formatDate);
function formatDate(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}` // DD/MM/YYYY
}
console.log(formattedDates);