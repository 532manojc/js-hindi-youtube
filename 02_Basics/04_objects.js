const tinderuser={}

tinderuser.id="123abc"
tinderuser.name='rockey'
tinderuser.isLOggedIn=false

// console.log(tinderuser);

const regularUser={
  email:'h@gmail.com',
  full_name:{
    userFullName:{
      first_name:"hitesh",
      last_name:"choudary"
    }
  }
}

console.log(regularUser);
console.log(regularUser.full_name);
console.log(regularUser.full_name.userFullName.first_name);
console.log(regularUser.full_name.userFullName.last_name);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4=Object.assign(obj1,obj2,obj3)
console.log(obj4);

const obj5={...obj1,...obj2,...obj3}  //using spread operator
console.log(obj5);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty('isLOggedIn')); //check weather any property is present in object or not
console.log(tinderuser.hasOwnProperty('123acb'));

const course={
  courseName:"js in hindi",
  price:999,
  courseTeacher:"hitesh"
}

const {courseTeacher}=course;
console.log(courseTeacher);

//destructering
const {courseTeacher: CT}=course;
console.log(CT);