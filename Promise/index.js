let firstPromise = new Promise((resolve,reject) => {
    console.log("Devansh Chhabra");
    resolve(1)
});

let secondPromise = new Promise((resolve,reject) => {
    console.log("Aishani Shreya");
    resolve("Resolved 1001");
});

// let thirdPromise = new Promise((resolve, reject) => {
//     console.log("Babbar");
//     reject("Internal Server Portal");
// })

let sayName = () => {
    console.log("My name is : Devansh");
}
setTimeout(sayName,5000);   // asyn code to be written in promise

let nextPromise = new Promise((resolve,reject) => {
    setTimeout(function sayMyName(){
        console.log("DEVANSH CHHABRA")
    },1000)
    resolve(1);
})

Promise.all([nextPromise,secondPromise,firstPromise])
.then((values) => {
    console.log(values);    // when all resolved
})
.catch((error) => {
    console.log("Error " + error)   // even if any one is error 
})
// if any one is pending ---> no output