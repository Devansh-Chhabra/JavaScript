// code 1
const t1 = performance.now()
for(let i = 1; i <= 100; ++i){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    document.body.appendChild(para)

}
const t2 = performance.now()
console.log("Time of Code 1 : ",t2-t1)

// code 2
const t3 = performance.now()
let myDiv = document.createElement('div');
for(let i = 1; i <= 100; ++i){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv)
const t4 = performance.now()
console.log("Time of Code 2 : ",t4-t3)

// code 3
const t5 = performance.now()
let fragDoc = document.createDocumentFragment();
for(let i = 1; i <= 100; ++i){
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    fragDoc.appendChild(para);
}
document.body.appendChild(fragDoc);
const t6 = performance.now();
console.log("Time of Code 3 : ",t6-t5);