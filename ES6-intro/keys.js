const glass = {
    name: 'glass',
    color: 'golden',
    price: 30,
    isCleaned: true
}

// console.log(glass);
// all property name
const keys = Object.keys(glass)
// console.log(keys);
// ['name', 'color', 'price', 'isCleaned']

// all value name
const values = Object.values(glass)
// console.log(values);
// ['glass', 'golden', 30, true]

// array of array, two dimensional array 

const pair = Object.entries(glass)
// console.log(pair);
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 30 ],
//     [ 'isCleaned', true ]
//   ] 

// delete glass.isCleaned

const { isCleaned, ...newGlass } = glass
// console.log(glass);
// console.log(newGlass);

// freeze
// Object.freeze(glass)
// glass.source = 'made in bd'
// glass.price = 600
// delete glass.name
// console.log(glass);

// seal
Object.seal(glass)
glass.source = 'made in bd'
glass.price = 600
delete glass.name
// console.log(glass);