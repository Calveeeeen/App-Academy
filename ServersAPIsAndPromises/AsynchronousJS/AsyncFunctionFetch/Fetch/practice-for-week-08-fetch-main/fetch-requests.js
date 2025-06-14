/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch("/products").then((response) => {
    console.log(response.status);
})


/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
fetch("/products").then((response) => {
    console.log(response.ok);
});


/* =================== 3. Print the Content-Type Header =================== */

// Your code here
fetch("/products").then((response) => {
    console.log(response.headers.get("X-Powered-By"));
    console.log(response.headers.get("Content-Type"));
    console.log(response.headers.get("Content-Length"));
    console.log(response.headers.get("Date"));
})


/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch("/products").then((response) =>{
    console.log(response.text());
})