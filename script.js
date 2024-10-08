const body = document.getElementsByTagName("body")[0];
const colorCode = document.getElementById("color-code");

function setColor(name) {
    body.style.backgroundColor = name;
    colorCode.textContent = name.toUpperCase();
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
    colorCode.textContent = color;
}


  randomColor();
