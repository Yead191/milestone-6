// for of use on array or string not in object
// for in use on object


const numbers = [23, 46, 65, 37, 94, 57]
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers);

}

// for of
for (const num of numbers) {
    // console.log(num);
}

const nobab = 'nobab siraj ud doula'
for (const char of nobab) {
    // console.log(char);
    
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 30,
    isCleaned: true
}
// error
// for (const key of glass) {
//     console.log(glass);
    
// }

for (const key in glass) {
    const value = glass[key]
    // console.log(key , value);
}

// optional
const keys = Object.keys(glass)
console.log(keys);

for (const key of keys) {
    const value = glass[key]
    // console.log(key, value);
    
}