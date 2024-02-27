let score =33
console.log(typeof score);

let score1 ="33"
console.log(typeof score1);

let Con_Number=Number(score1)
console.log(typeof Con_Number);

let score2 ="33abc"
let Con_Number1=Number(score2)
console.log(typeof Con_Number1);
console.log(Con_Number1);

let score3 =true
let Con_Number2=Number(score3)
console.log(typeof Con_Number2);
console.log(Con_Number2);

let isLoggedIn=true
let bool_to_no=Number(isLoggedIn);
console.log(bool_to_no);

let isLoggedIn1=1   //"","manoj"
let no_to_bool=Boolean(isLoggedIn1)
console.log(no_to_bool);

//*************operations***********

let value=33
let NegValue=-value
console.log(NegValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="hello"
let str2=" Manoj"
let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+3);
console.log(1+2+"2");

let x=3;
let y=x++;
console.log({x},{y});

let a=3;
let b=++a;
console.log({a},{b});