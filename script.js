var body = document.getElementById("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var cssText = document.getElementById("cssText");
var btn = document.getElementById("btn");
var direction = "to right";

function randomHexColor() {
    //return a randomly generated hex color in this format #rrggbb
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += Math.floor(Math.random() * 16).toString(16);
    }
    return hexColor;
}

function randomDirection() {
    return `${Math.floor(Math.random() * 360)}deg`;

}

function updateGradient() {
    // change the body background based on color inputs:
    body.style.background = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
    cssText.textContent = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
}

function setRandomToAll() {
    color1.value = randomHexColor();
    color2.value = randomHexColor();
    direction = randomDirection();
    updateGradient();
}

color1.value = "#00ff00";
color2.value = "#0000ff";
updateGradient();

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
btn.addEventListener("click", setRandomToAll);
