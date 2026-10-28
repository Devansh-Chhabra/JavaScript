function changeText(event){
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello, Devansh Chhabra here 😁😁😁";
}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText);

function preventingDefault(event){
    console.log(event);
    event.preventDefault();
    let anchorElement = document.getElementById('anchor');
    anchorElement.textContent = "Click done";
    anchorElement.style.backgroundColor = "yellow";
    anchorElement.style.color = "red";
}
let anchorElement = document.getElementById('anchor');
anchorElement.addEventListener('click',preventingDefault);

function alertClick(event){
    alert("You have clicked on : " + event.target.textContent);
}
let paras = document.getElementById('first');
paras.addEventListener('click',alertClick);

function clickAlert(event){
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on : " + event.target.textContent);
    }
}
let secondEle = document.getElementById('second');
secondEle.addEventListener('click',clickAlert);