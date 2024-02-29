const marval_heros=['ironman','hulk','thor','spiderman'];
const dc_heros=['sumerman','aquaman','batman','wonder women'];

// marval_heros.push(dc_heros);
// console.log(marval_heros);

const all_heros=marval_heros.concat(dc_heros);
console.log(all_heros);

//spread operator
const indian_heros=['chota beam','mighty raju','hanuman']
const all_heros1=[...marval_heros,...dc_heros,...indian_heros]
console.log(all_heros1);

const arr=[1,2,3,[4,5],6,[7,8,[9,10]]];
const arr1=arr.flat(Infinity);
const arr2=arr.flat(1);

console.log(arr1);
console.log(arr2);

console.log(Array.isArray("hitesh"));
console.log(Array.isArray(arr));

console.log(Array.from("hitesh"));
console.log(Array.from('123456'));//wont work for numbers

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

