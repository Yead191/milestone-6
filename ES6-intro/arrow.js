// normal way [function declaration]

function add(a = 0, b = 0) {
    const result = a + b
    return result
}

// console.log(add(9,21));


// function expression

const add2 = function (a, b) {
    return a + b
}
// console.log(add2(20, 41));

// arrow function 
const mul = (n1 = 1, n2 = 1) => n1 * n2
// console.log(add3(8, 9));

const add3 = (n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0) => n1 + n2 + n3 + n4 + n5 + n6


// console.log(add3(4, 5, 6, 6, 6, 11));