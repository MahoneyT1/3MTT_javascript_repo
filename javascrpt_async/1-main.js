// ○ Refactor the code using async/await to simplify the asynchronous flow.
// ○ Compare both approaches in your comments, explaining which one you find more readable and
// efficient.
// ○ Submit your code, along with a brief reflection on how you debugged any asynchronous issues.
// Submission:
// ● Submit your code and summary via CodePen.

// store url
let baseUrl = "https://jsonplaceholder.typicode.com/users/1";

async function fetchApi(url) {
    // use the fetch module

    const response = await fetch(url);

    try {
        let jsonResponse = response.json();
        return jsonResponse
    }
    catch (error ) {
        return error
    };

};



async function callFunc() {
    const data = await fetchApi(baseUrl);

    const first = document.getElementById("first");
    const p = document.createElement('p');

    p.innerHTML = `<P> This user Id is ${data.id}</p>`;
    p.style.color = 'yellow'
    p.style.display = 'flex'
    p.style.justifyContent = 'center'
    p.style.marginTop = '20px'
    p.style.fontSize = '50px'
    first.appendChild(p);
}

callFunc();