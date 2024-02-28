const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const heros=["iron man","hulk","thor","loki"];  //array
console.log(heros);

let myObj={         //object decleration
  name:"manoj",
  age:22,
}
console.log(myObj);

const myfunction=function(){   //function decleration
  console.log("hello world");
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack -> premitive   ------creat a copy of original data and work on it
//heap -> non-premitive    ------work by reference ,this means any change made on parameter will affect the original value

let myYoutubeName="hitesh choudary"

let anotherName=myYoutubeName
anotherName="chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
  email:"user1@gmail.com",
  upi:"user1@ybl",
}

let userTwo=userOne;

userTwo.email="user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
