
const mySymbol=Symbol('key1');

// object literals

const jsuser={           //key:value
  name:"hitesh",
  "full name": "hitesh choudary",
  [mySymbol]:"mykey1",
  age:23,
  email:"hitesh@gmail.com",
  isLoggedIn:false,
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser['isLoggedIn']);
console.log(jsuser[mySymbol]);


jsuser.email="hitesh@chatgpt.com"
console.log(jsuser["email"]);

console.log(jsuser);

Object.freeze(jsuser.age);    //either we can freeze eniire object or freeze only one parameter
jsuser.email="hitesh@microsoft.com"
jsuser.age=44

console.log(jsuser);

jsuser.greeting=function(){
  console.log("hello JS user");
}

jsuser.greeting2=function(){
  console.log(`hello JS user, my name is ${this.name} and my age is ${this.age}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());

