/* Write a function rotate(array, num) that takes in an array and a number
as args. When the num is positive, the elements of the array should be rotated
to the right. When the num is negative, the elements of the array should be
rotated to the left. The function should mutate the original array.

Define this function using function expression syntax. */

// your code here
function rotate(array, num){
    let removed = []
    if(num >0){
        for(let i =0 ; i<num; i++){
            let pop = array.pop();
            array.unshift(pop);
        }
        return array;
        // return arr;
    }
    else if(num<0){
        for(let i =0 ; i<Math.abs(num); i++){
            let cut = array.shift();
            array.push(cut);
            return arr.splice(arr.length, 0, cut)
        }
        // for(let t=0; t<removed.length; t++){
        //     arr.push(removed);
        // }
    }
    // return arr;
}



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
