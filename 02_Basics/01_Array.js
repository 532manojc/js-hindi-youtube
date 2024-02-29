let myArr=[1,2,3,4];
console.log(myArr[0]);
console.log(myArr[1]);

let myHeros=['ironman','hulk','thor','loki'];
console.log(myHeros[0]);
console.log(myHeros[2]);

let myArr1=new Array(2,4,7,9);
console.log(myArr1[2]);

//array methods
console.log(myArr1);

let anotherArray= new Array(0,1,2,3,4,5)
console.log(anotherArray);

anotherArray.push(6);
anotherArray.push(7);
anotherArray.pop();
anotherArray.unshift(8) //add the value at starting of array,it is time consuming for    large data set of array
anotherArray.shift();  //remove the value at starting of array
console.log(anotherArray);

console.log(anotherArray.includes(9));
console.log(anotherArray.includes(5));
console.log(anotherArray.indexOf(4));
console.log(anotherArray.indexOf(9));

let newArr=anotherArray.join()
let newArr1=anotherArray.join('-')
let newArr2=anotherArray.join('?')
let newArr3=anotherArray.join('  ')
console.log(anotherArray);
console.log(newArr);
console.log(typeof newArr);

let mynewArr=[0,1,2,3,4,5];
console.log("A",mynewArr);

const myn1=mynewArr.slice(1,3);  //does not include last index
console.log(myn1);


const myn2=mynewArr.splice(1,3);  //include last index and alter the original array,it will remove the portion of the array
console.log(myn2);
console.log(mynewArr);