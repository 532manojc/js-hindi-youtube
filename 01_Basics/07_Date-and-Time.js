//dates

const mydate=new Date();
console.log(mydate);

console.log(typeof mydate);        // object

console.log(mydate.toString());  //print day,date,time,timezone
console.log(mydate.toDateString());  //day ,date only
console.log(mydate.toTimeString());  //time and timezone
console.log(mydate.toLocaleDateString());  //print date in local format
console.log(mydate.toLocaleString()); //print date and time in local format
console.log(mydate.toJSON());
console.log(mydate.toISOString());//Returns a date as a string value in ISO format
console.log(mydate.toUTCString());//Returns a date converted to a string using Universal Coordinated Time (UTC).
console.log(mydate.getTimezoneOffset());//Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).

let myCreatedDate=new Date(2023,5,26);
console.log(myCreatedDate.toDateString());

let myCreatedDate1=new Date(2023,0,13,5,8);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2=new Date(2023,0,13,5,8,9);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3=new Date("2023-10-12");  //yyyyy-mm-dd
console.log(myCreatedDate3.toDateString());

let myCreatedDate4=new Date("10-12-2023");  //dd-mm-yyyy
console.log(myCreatedDate4.toDateString());


let myTimeStamp= Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.toLocaleString());
console.log(newDate.getDate());
console.log(newDate.getDay());  //return number based on monday as 1 and so on...
console.log(newDate.getMinutes());
console.log(newDate.getHours());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());