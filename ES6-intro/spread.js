const max = Math.max(6,4,23,65,86,22,11)
// console.log(max);
const numbers = [34,53,65,22,75,33,63]
const math = Math.max(...numbers)
// console.log(math);


// use spread operator to copy
const friends = [4,5,43,22,66]
const bondu = friends
const dosto = [...friends]
friends.push(100)
// console.log(dosto);
// console.log(friends);



// advance 
const numm = [...friends, 999] //add extra element while copy
// console.log(numm);
