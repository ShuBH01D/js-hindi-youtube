const user={
    username:"shubh",
    price:999, 

    welcome:()=>{
        console.log(`${this.username}, welcome to the website`);
    }
}
// user.welcome()
// user.username="sudarshan"
// user.welcome()


const addtwo= (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4));