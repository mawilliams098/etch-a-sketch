const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        container.appendChild(pixel);
    }
}

const pixels = container.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (event) => {
        pixel.style["background-color"] = "lightcoral";
    })
})

const resize = document.querySelector("#resize");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");

resize.addEventListener("click", (event) => {
    let input = prompt("How many pixels would you like per side?");
    if (parseInt(input) >= 100) {
        alert("Sorry! Please choose a smaller dimension.")
        return -1;
    }
    let newDimension = (100 / parseFloat(input)).toFixed(2);
    pixels.forEach((pixel) => {
        pixel.style["height"] = newDimension + '%';
        pixel.style["width"] = newDimension + '%';
        pixel.style["background-color"] = "white";
    })
})

reset.addEventListener("click", (event) => {
    pixels.forEach((pixel) => {
        pixel.style["background-color"] = "white";
    })
})
