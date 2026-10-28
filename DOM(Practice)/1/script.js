let inputFile = document.querySelector("#inputFile");
let btn = document.querySelector("#btn");

btn.addEventListener("click",() => {
    inputFile.click();
})

inputFile.addEventListener("change",(dets) => {
    let file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})