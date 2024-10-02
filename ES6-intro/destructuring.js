const actor = {
    name: 'yead',
    age: 23,
    phone: '01624343171',
    balance: 50000,
    type: 'hero'

}

// if right side is an object left side of destructing will be object as well
// use property name as a variable that contains the property value
const {phone, type: role} = actor 
const {age} = actor 
const {balance} = actor 
const {name} = actor 
// console.log(role);
// console.log(age);
// console.log(balance);

// const phone = actor.phone
// const age = actor.age
// const balance = actor.balance
// const name = actor.name

// console.log(name);


// array destructuring

const numbers = [33, 65]
const [f, s] = numbers
// console.log(f);

const [x,y] = [25, 67]


//
function doubleIt (a,b){
    return [a*2, b*2]
}
const [fi, sec]= doubleIt(6,9)
// console.log(fi, sec);
