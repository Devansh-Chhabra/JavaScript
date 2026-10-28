async function getData() {
    // prepare url
    let url = 'https://jsonplaceholder.typicode.com/todos/2';
    
    // fetch -> get request
    let response = await fetch(url);

    // process
    let data = await response.json();
    console.log(data);
}
getData();



const myHeaders = new Headers ();
myHeaders. append ("Content-Type",
"application/json");

const options = {
    method: "POST",
    body: JSON. stringify({ username: "devansh chhabra" }), headers: myHeaders
};

const url = "https://jsonplaceholder.typicode.com/posts";

async function get(){
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
}

async function post() {
    let response = await fetch(url,options);
    let data = await response.json();
    console.log(data);    
}

async function processData() {
    await post();
    await get();
}

processData();
