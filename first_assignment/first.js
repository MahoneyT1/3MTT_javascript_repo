// Use JavaScript to dynamically update content based
// on user actions.
// Implement two types of interactions
// (e.g., button clicks or form submissions).

// used for testing my script connection to html
console.log("Hello  World");

// get the menu element and create a dropdown
const menuElement = document.getElementById('menu');
const removeMenu = document.getElementById("menu");

// function that changes the menu to welcome
function clickOnMenu(element) {
    if (element.textContent === "Menu") {
        element.textContent = "Welcome";
    } else {
        element.textContent = "Menu"
    }

};
menuElement.addEventListener('click', ()=> clickOnMenu(menuElement));

// button effects
const button = document.getElementById("btn");

// function that redirects to google homepage
function buttonChange(buttn) {
    buttn.addEventListener('click', ()=> {
        window.location.href = "https://google.com"
    })
};

buttonChange(button);
