const display = document.querySelector(".calculator-display");
const buttons = Array.from(document.querySelectorAll(".calculator-buttons"));

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    /* console.log('clicked');
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText); */

    const buttonValue = e.target.innerText;
    const displayValue = display.innerText;

    if (buttonValue === 'AC') {
      display.innerText = '';
    }
    else if (buttonValue === '=') {
        display.innerText = window.Function(`return ${displayValue}`)();
    }
    else {
        display.innerText = displayValue + buttonValue;
    }

    });
});























