const display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (
        "0123456789.+-*/%".includes(key)
    ) {
        append(key);
    }
    if (key === "Enter" || key === "=") {
        calculate();
    }
    if (key === "Backspace") {
        display.innerText =
            display.innerText.length > 1
                ? display.innerText.slice(0, -1)
                : "0";
    }
    if (key === "Escape") {
        clearDisplay();
    }
});
