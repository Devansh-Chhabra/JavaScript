let form = document.querySelector("form");
form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    let inputs = document.querySelectorAll("input");
    let main = document.querySelector("#main");

    let card = document.createElement("div");
    let profile = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");

    card.classList.add("card");
    profile.classList.add("profile");
    img.setAttribute("src", inputs[0].value);
    h3.textContent = inputs[1].value;
    h5.textContent = inputs[2].value;
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach((val) => {
        if (val.type !== "submit") {
            val.value = "";
        }
    })
})