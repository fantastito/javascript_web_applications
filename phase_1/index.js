console.log("index.js start");

// alert("Hello! I am an alert box!!");

const body = document.querySelector("body");


// const recipe_titles = ["Butter on toast", "Yogurt and museli"]
// const recipes = [ ["Toast some bread", "Spread butter on the toast"], ["Add some yoghurt to the bowl", "Add some museli to the bowl"] ]

// const writeRecipes = (recipe_titles, recipes) => {
//     for (let i = 0; i < recipe_titles.length; i++) {
//         body.appendChild(document.createElement("p").innerText = recipe_titles[i])
//         recipe_steps = document.createElement("ol")
//         for (let j = 0; j < recipes[i].length; j++) {
//             recipe_steps.appendChild(document.createElement("li").innerText = recipes[i][j])
//         }
//         body.appendChild(recipe_steps);
//     }
    
// }

// writeRecipes()
if (window.location.pathname === '/blog') {
    const recipeOneListEl = document.createElement("ol"); // Create a unordered list element

    const stepOneEl = document.createElement("li"); // Create a new list item element
    stepOneEl.innerText = "Toast some bread"; // Update the text of the list item
    recipeOneListEl.appendChild(stepOneEl); // Add the item as a child of the recipe list

    const stepTwoEl = document.createElement("li"); // Repeat for the second instruction
    stepTwoEl.innerText = "Spread butter on the toast";
    recipeOneListEl.appendChild(stepTwoEl);

    body.appendChild(recipeOneListEl); // Add the recipe list onto the body of the page

    const paragraph = document.createElement("p"); // Create 2nd title
    paragraph.innerText = "Try this other recipe!";
    body.appendChild(paragraph);

    const recipeTwoListEl = document.createElement("ol");

    const stepOne2El = document.createElement("li"); // Create a new list item element
    stepOne2El.innerText = "Add some yoghurt to the bowl"; // Update the text of the list item
    recipeTwoListEl.appendChild(stepOne2El); // Add the item as a child of the recipe list

    const stepTwo2El = document.createElement("li"); // Create a new list item element
    stepTwo2El.innerText = "Add some museli to the bowl"; // Update the text of the list item
    recipeTwoListEl.appendChild(stepTwo2El); // Add the item as a child of the recipe list

    body.appendChild(recipeTwoListEl); // Add the recipe list onto the body of the page

}

// 03_sending_http_requests page
const URL = "https://official-joke-api.appspot.com/random_joke";
const TodoURL = 'https://jsonplaceholder.typicode.com/todos/1';

function printDataToPage(object) {
    const printData = document.createElement("p");
    printData.innerText = object;
    body.appendChild(printData);
    // body.appendChild(document.createElement("p").innerText = object);
}

// object.map(function)


if (window.location.pathname === '/joke') {
    console.log('joke.js start');
    async function fetchJoke (URL) {
        const response = await fetch(URL);
        const joke = await response.json();
        return joke;
    }
    fetchJoke(URL)
    .then(joke => {
        console.log(joke);
        console.log(joke.setup);
        console.log(joke.punchline);
        const printSetup = document.createElement("p");
        printSetup.innerText = joke.setup;
        body.appendChild(printSetup);
        // const printPunchline = document.createElement("p");
        // printPunchline.innerText = joke.punchline;
        // body.appendChild(printPunchline);
    });

    document.querySelector('#orange').addEventListener('click', () => {
        console.log('clicked!')
        fetchJoke(URL)
        .then(joke => {
            const printPunchline = document.createElement("p");
            printPunchline.innerText = joke.punchline;
            body.appendChild(printPunchline);
        }); 
    });

}