const def = (x, y) => x - y
const mult = (first, second, third) => first * second * third

// single parameter or one parameter 
const getAge = (person) => person.age
const student = {
    name: 'yead',
    age: 23,
    section: 'A'
}
// console.log(getAge(student));
const getThird = numbers => numbers[2]
// console.log(getThird([4,50,22,45,64]));


const doubleIt = num => num * 2
// console.log(doubleIt(55));

// no parameter
const getPI = () => Math.PI
// console.log(getPI());


// large arrow function. if you want to get anyhing returned from this function, then you have to use the return keyword

const doMath = (x, y, z) => {
    const sum = x + y + z
    const mul = x * y * z
    const result = mul - sum
    return result
}
// console.log(doMath(5,7,8));


