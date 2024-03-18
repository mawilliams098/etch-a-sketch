const canvas = document.querySelector("#canvas");

function addPixels(numPixels) {
    for (let i = 0; i < numPixels; i++) {
        for (let j = 0; j < numPixels; j++) {
            const pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            canvas.appendChild(pixel);
        }
    }

    const pixels = canvas.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", (event) => {
            pixel.style["background-color"] = "lightcoral";
        })
    })
}

function removePixels() {
    const canvas = document.querySelector("#canvas");
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

addPixels(16);
const resize = document.querySelector("#resize");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");

resize.addEventListener("click", (event) => {
    let input = prompt("How many pixels would you like per side?");
    if (parseInt(input) >= 100) {
        alert("Sorry! Please choose a smaller dimension.")
        return -1;
    }

    removePixels();
    addPixels(parseInt(input));

    let newDimension = (100 / parseFloat(input))

    const pixels = canvas.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.style["height"] = newDimension + '%';
        pixel.style["width"] = newDimension + '%';
        pixel.style["background-color"] = "white";
    })
})

reset.addEventListener("click", (event) => {
    const pixels = canvas.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.style["background-color"] = "white";
    })
})
