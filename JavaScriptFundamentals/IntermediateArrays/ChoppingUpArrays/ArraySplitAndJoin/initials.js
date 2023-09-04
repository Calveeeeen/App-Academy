/* Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name. */

// your code here
function initials(name){
    let initials = [];
    let names = name.split(" ");
    for (let i=0; i<names.length; i++ ){
        let named = names[i];
        let initial = named.charAt(0)
        initials.push(initial);
    }
    return initials.join("").toUpperCase();
}



console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
