//spread - убирает []

const num = [1,2,3,4,5];
function allSum() {
    let sum = 0;
    for (let i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(allSum( ...num));

//rest - 

let [a, b, ...anything] = num;
console.log(a, b, anything); // 1 2 [ 3, 4, 5 ]

function someFunction(first, second, ...athers) {
    return [first, second, athers]
}

let [one, two, three] = someFunction(1,2,3,4,5,6);
console.log(one, two, three); // 1 2 [ 3, 4, 5, 6 ]

console.log(...num); // 1 2 3 4 5


// стрелочные + map
let rooter = x => x*x; 
console.log(rooter(3)); 

let num2 = [1,3,5,9]

console.log(num2.map(rooter))
console.log([1,3,5,9, 11].map(x => x*x)) // [ 1, 9, 25, 81, 121 ]

console.log(num.concat(num2))
console.log([...num, ...num2]) // [ 1, 2, 3, 4, 5, 1, 3, 5, 9 ]