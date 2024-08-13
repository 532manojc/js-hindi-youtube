function add2Num(num1,num2){
    console.log(num1+num2);
  }
  
  // const ans=add2Num(5,3);  //wrong
  // console.log(ans);
  
  function add2Num(num1,num2){
    // result=num1+num2
    // return result
    return num1+num2
  }
  const ans=add2Num(5,3);  //wrong
  // console.log("the answer is ",ans);
  
  function loggedInUserMessage(username='sam'){  //default value like  sam
    if(username === undefined){
      console.log("please enter the username");
      return
    }
    return `${username} has just logged in.`
  }
  
  const message=loggedInUserMessage();
  console.log(message);
