const name2="manoj "

const repoCnt=50

// console.log(name+repoCnt+" value");

console.log(`hello my name is ${name2} and my repo count is ${repoCnt}`);

const gameName=new String('Hitesh');
console.log(gameName[0]);
console.log(gameName[2]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('h'));

const gameName1=new String('Hitesh');
const newString=gameName1.substring(0,4);
console.log(newString);

const anotherString=gameName1.slice(0,4);
console.log(anotherString);

const anotherString1=gameName1.slice(-8,2);
console.log(anotherString1);

const newStringOnw="    hitesh    "
console.log(newStringOnw.trim());

const url="https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));
console.log(url.replace('hitesh','Manoj'));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

const name="hitesh=hc-com";
console.log(name.split('='));
console.log(name.split('-'));

const name1="hitesh hc com";
console.log(name1.split(' '));
console.log(name1.split('h'));