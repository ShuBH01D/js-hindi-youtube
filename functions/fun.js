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




// arrr()


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




function calculateprise(num1){
   return num1
}

// console.log(calculateprise(2));

//spread/rest operator 


function calculateprise(...num1){
   return num1
}

// console.log(calculateprise(200,300,4000,400000));


const user={
   username:"shuhbbh",
   price:199
}
function handleobject(anyobject){
   console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
}


handleobject(user)

const abc=[200,300,400,500]



function returnsecondvalue(getarray){
   return getarray[3]
}

console.log(returnsecondvalue(abc));