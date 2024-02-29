const score=400
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));
console.log(balance.toFixed(3));
console.log(balance.toFixed(4));

const otherN0 =23.8924
console.log(otherN0.toPrecision(2));
console.log(otherN0.toPrecision(3));
console.log(otherN0.toPrecision(4));

const newNum =10000000
console.log(newNum.toLocaleString());
console.log(newNum.toLocaleString('en-IN'));


//************************************************ 

console.log(Math.abs(-7));
console.log(Math.abs(-2));

console.log(Math.round(4.6));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(5,4,2,3,8,1));
console.log(Math.max(5,4,2,3,8,1));

console.log(Math.random());
console.log((Math.random()*10 )+1);
console.log(Math.floor((Math.random()*10 )+1));

const min=1;
const max=6;

console.log(Math.floor(Math.random()*(max-min+1)+min));

