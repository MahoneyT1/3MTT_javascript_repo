// Create a simple interactive webpage that displays a list of items (e.g., a to-do list or product catalog) using JavaScript.
// 1. Instructions:
// ○ Use an array to store your list items.
// ○ Use DOM manipulation to display the items on the webpage.
// ○ Add functionality for the user to add new items to the list using an input field and a
// button.
// ○ Implement an event listener that updates the list when the user submits a new item.
// Submission:
// ● Submit your JavaScript code and summary via CodePen.

// define an Array of items
const products = ['Chairs', 'Table', 'Dinning Table',
                    'Bed', 'Tv', 'Office chair'
                ]

// div element -- parents class              
const firstChild = document.querySelector('.first-child');
const newUlElement = document.createElement('ul');

// create li elements
// using a loop to add multiple items to the products list
for (let i = 0; i < products.length; i++) {
    let li = document.createElement('li');
    li.textContent = products[i];
    newUlElement.appendChild(li);
    firstChild.appendChild(newUlElement);
};
// get the button element
const btn = document.getElementById('btn');


// set up an event listener on click on the button
btn.addEventListener('click', ()=> {
    // get the input inserted by the user
    const inputValue = document.getElementById('inputId').value;

    // check if input exists
    if (inputValue) {
        // add products to the list of products
        products.push(inputValue);
        // create an li element and append to parents element
        const li = document.createElement('li');
        li.textContent = inputValue;
        newUlElement.appendChild(li);
        firstChild.appendChild(newUlElement);
        // clear the input field
        document.getElementById('inputId').value = '';
    };
});
