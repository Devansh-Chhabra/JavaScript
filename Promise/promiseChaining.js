let myPromise =  new Promise((resolve,reject) => {
    let success = false;
    if(success){
        resolve("Resolved 😁")
    }
    else{
        reject("Rejected 😐")
    }
})

myPromise.then((message) => {
    console.log("Message 1 : " + message);
    return "Message 2";
})
.then((message) => {
    console.log("Message 2 : " + message)
    return "FINISH";
})
.then((message) => {
    console.log(message);
})

.catch((error) => {
    console.log("Error 1 : " + error)
    return "LAST ERROR";
}).then((error) => {
    console.log(error)
})