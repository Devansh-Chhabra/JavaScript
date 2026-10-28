let promise =  new Promise((resolve,reject) => {
    let success = true;
    if(success){
        resolve("Resolved 😁")
    }
    else{
        reject("Rejected 😐")
    }
})
promise.then((message) => {
    console.log("Message 1 : " + message);
}).catch((error) => {
    console.log("Error " + error)
}).finally(() => {
    console.log("It will always print,whether result is True or False")
})