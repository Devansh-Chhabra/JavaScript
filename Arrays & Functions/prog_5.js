function hello(){
    console.log("Hello,World!")
}
hello();

const hello = function(){
    console.log("Hello,World!")
}
hello();

const hello = () => {
    console.log("Hello");
    console.log("Devansh")
}
hello();




setTimeout(hello,3000);

setTimeout(function(){
    console.log("Hello,World!")
},3000);

setTimeout(() => {
    console.log("Hello,World!")
},3000)


const numbers = [1,2,3,4,5,6]
const squares1 = numbers.map(sqr)
function sqr(element){
    return Math.pow(element,2)
}
const squares2 = numbers.map(function(element){
    return Math.pow(element,2)
})
const squares3 = numbers.map((element) => {
    return Math.pow(element,2)
})