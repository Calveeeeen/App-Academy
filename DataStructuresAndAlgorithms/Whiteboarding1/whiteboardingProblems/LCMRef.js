let obj={};
// can probably optomize
function lcm(num1, num2){
    let max = Math.max(num1, num2);
    let products1 = [];
    let products2 = [];
    let LcM = [];
    for(let i = 1; i<=max; i++){
        let product1 = num1 * i;
        products1.push(product1)
    }
    for(let t=1;t<=max; t++){
        let product2 = num2*t;
        products2.push(product2);
    }
    // console.log(products1);
    // console.log(products2);
    for(let x=0; x<products1.length; x++){
        for(let a=0; a<products2.length; a++){
            let el1 = products1[x];
            let el2 = products2[a];
            if(el1 === el2){
                return el1;
            }
        }
    }

}

// lcm(2, 3);  // => 6
// lcm(6, 10);  // => 30
// lcm(24, 26);  // => 312

console.log(lcm(2, 3));
console.log(lcm(6, 10));
console.log(lcm(24, 26));
console.log(lcm(320, 540));
