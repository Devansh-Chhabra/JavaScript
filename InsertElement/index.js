let parentEle = document.querySelector('#sdiv');
let childEle = document.createElement('h1');
childEle.textContent = "New Heading Inserted! MAGIC 🪄🪄🪄🪄🪄";
parentEle.insertAdjacentElement('beforebegin',childEle);