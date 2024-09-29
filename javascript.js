const display = document.querySelector(".display");
const allButtons = document.querySelectorAll("button");
const buttonAC = document.querySelector(".clear");

buttonAC.addEventListener("click", () => {
    display.textContent = 0;
    console.log("clicked AC");
});

