
const display = document.querySelector(".display");
const buttonAC = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");

buttonAC.addEventListener("click", () => {
    display.textContent = 0;
    console.log("clicked AC");
});

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        // if display is 0 and text is 0 do nothing
        if (!(display.textContent == "0" && number.textContent == "0")) {
            if (display.textContent == "0" && number.textContent != "0") {
                display.textContent = number.textContent;
            } else {
                display.textContent += number.textContent;
            }
        }
    });
});
