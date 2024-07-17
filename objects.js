//singleton
//object literls 


const jsuser={
    name :"shubham",
    age:24,
    location:"nashik", 
    email:"shubhamdighe@123.com",
    days:["monday","tuesday"]
    
}
// console.log(jsuser.email);
// console.log(jsuser["email"])




//tindor 

const tinderuser={}
tinderuser.id="1233abc"
tinderuser.name="shubham dighe"
tinderuser.isloggedIn=false

 
//   console.log(tinderuser);

const user={
   
    email:"shubham123@gmail.com",
    fullname: {
        userfullname:{
            firstname:"shubham",
            lastname:"Dighe"
        }
    }

}
// console.log(user.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"b"}


const obj3 =Object.assign( {}, obj1,obj2)
// console.log(obj3);





const start={a:4,b:5,c:6}
const end={d:4,e:5,f:6}

const equal=Object.assign({},start,end)
// console.log(equal);


const obj5={...end,...start}
// console.log(obj5);


const users=[
    {
        id:1,
        email:"shubham@gmil.com"

    },
    {},
    {},
    {}
]
users[1].email
// console.log(tinderuser);


// console.log(Object.entries(tinderuser));
const course={
    coursename:"js",
    price:"999",
    courseInstructor:"adas"
}
const{courseInstructor}=course
// console.log(courseInstructor);









