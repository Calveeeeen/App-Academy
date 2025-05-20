/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1(){
    return 1;
}

async function num2(){
    return 2
}

console.log("num1",num1());
console.log("num2",num2());
// console.log("num2" ,num2().then(result => console.log(result)));
num2().then(result => console.log(result))

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function waiting(){
    const val = await num2();
    console.log("waiting", val);
}

waiting();


/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function customPromise(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!!!!");
        }, 1000)
    });

    const result = await promise;
    console.log("my promise is", result);
}

customPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done!");
    }, 1500)
}).then((result) => {
    console.log("then my other promise is" , result);
})


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitMore(){
    wait(2000).then(() => {
    console.log("waited 2 seconds");
});
}

waitMore();
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
function randomPromise(random) {
    return new Promise((resolve, reject) => {
        if (random < 2) {
            resolve("success");
        } 
        else {
            reject("random error");
        }
    });
}

for (let i=0; i<3; i++){
    const random = Math.random();
    wait(2000 + random *1000)
        .then(() => randomPromise(i))
        .then(result => console.log("random try #", i, result))
        .catch(error => console.log("random try #", i, error));
}


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async (i) => {
    const random = Math.random();

    await wait(3000 + random * 1000);

    try {
        const result = await randomPromise(random);
        console.log("random try #", i, result);
    } catch (error) {
        console.log("random try #", i, error);
    }
};

tryTryAgain(1);

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log("END OF PROGRAM");