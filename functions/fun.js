//simple function 
 function arr(){
    console.log("hello");
 }
//  arr()



//basics 

// function add(number1,number2){
//    console.log(number1+number2);
// }
// add(2,3)

// function add(number1,number2){
//       // console.log(number1+number2);
//      return add
   // }

   


   function addtwoNumbers(number1,number2){
      let result=number1+number2
      return result
   }

   const result=addtwoNumbers(3,3)
   // console.log("Result:",result)






   // function loginuser(username){
   //    if(!username){
   //       console.log("enter a username");
   //       return
   //    }
     
    
   // }

// console.log(loginuser("shubham"));


function calculate(...num1){
   return num1
}
// console.log(calculate(200,300,400))




const arrr ={
   name:"xkk",
   email:"nbfhjkdbzv"
}
function handelobject(anyobject) {
   console.log(`username is ${anyobject.name} and name is ${anyobject.email}`);
}

