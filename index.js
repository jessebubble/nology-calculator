const display = document.querySelector(".calculator-display");
const buttons = Array.from(document.querySelectorAll(".calculator-buttons"));

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    /* console.log(e);
    console.log(e.target);
    console.log(e.target.innerText); */
    const buttonValue = e.target.innerText;
    const displayValue = display.innerText;

    if (buttonValue === 'AC') {
      display.innerText = '';
    }
    else if (buttonValue === 'x') {
        display.innerText = displayValue + '*';
    }
    else if (buttonValue === '÷') {
        display.innerText = displayValue + '/';
    }
    else if (buttonValue === '%') {
        display.innerText = displayValue + '/100';
    }
    else if (buttonValue === '+/-') {
        display.innerText = displayValue + '*-1';
    }
    else if (buttonValue === '=') {
        display.innerText = window.Function(`return ${displayValue}`)();
    }
    else {
        display.innerText = displayValue + buttonValue;
    }
    });
});

const logo = document.querySelector(".navbar-logo");
const navbarlinks = Array.from(document.querySelectorAll(".navbar-links"));
const herotitle = document.querySelector(".hero-title");

logo.addEventListener("click", () => {
    navbarlinks.forEach((link) => {
        link.innerHTML = 'DOM Manipulation';
        link.style.color = 'red';
        link.style.fontSize = '30px';
        link.style.fontWeight = 'bold';
        link.style.transition = 'all 1s ease-in-out';
        link.style.transform = 'rotate(360deg)';
    });
});
herotitle.addEventListener("click", () => {
    herotitle.innerHTML = 'Manipulate the DOM today!';
    herotitle.style.color = 'yellow';
    herotitle.style.fontSize = '36px';
    herotitle.style.fontWeight = 'bold';
    herotitle.style.transition = 'all 1s ease-in-out';
    herotitle.style.scale = '1';
});

const heroicon = document.querySelectorAll(".hero-icon");
const herocalculator = document.querySelector(".hero-calculator");
const images = ["./assets/bg1.jpg", "./assets/bg2.jpg", "./assets/bg3.jpg", "./assets/bg4.jpg", "./assets/bg5.jpg"];

heroicon.forEach((icon) => {
    icon.addEventListener("click", () => {
        herocalculator.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
        herocalculator.style.transition = 'all 1s ease-in-out';
    });
});