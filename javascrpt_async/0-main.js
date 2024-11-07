// Weekly Applied Learning Assignment

// Create a JavaScript project that fetches data from an API and displays it on a web page.
// 1. Instructions:
// ○ Use promises to fetch the data and handle any potential errors.
// ○ Refactor the code using async/await to simplify the asynchronous flow.
// ○ Compare both approaches in your comments, explaining which one you find more readable and
// efficient.
// ○ Submit your code, along with a brief reflection on how you debugged any asynchronous issues.
// Submission:
// ● Submit your code and summary via CodePen.

// store url
let baseUrl = "https://jsonplaceholder.typicode.com/users/1";


function getFetch(url) {

    // using fetcg function to make a request
    return new Promise((resolve, reject)=> {
        if (resolve) {
            const response = fetch(url);
            if (response) {
                resolve(response);
            }
            else {
                return reject()
            }
        }
        else {
            throw new Errow(reject());
        };
    })
    .then((respose) => {
        return respose.json();
    })
    .catch((error)=> {
        return error;
    });
};

// call the getFetch data and pass a url
const datas = await getFetch(baseUrl);


const p = document.getElementById("mymy");
p.innerHTML = `<h2> user Id is ==> ${datas.name} </h2>`;


// Observations

// 1 using promises channing leads to call back hell, prone to error
// takes more time to complete a request
