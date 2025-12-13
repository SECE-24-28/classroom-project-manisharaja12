// var a; // global scope [redeclaration, reinitialization]
// a=10;
// var a=20;

// let b; // box scope [reinitialization]
// b=10;
// b=20;

// const c=30; // box scope

// // Data types
// var p=20;
// var q="Hello";
// var bool="true";
// var r;
// var s=null;
// var t=undefined;
// var u=BigInt(12345678901234567890);

// // Array
// var arr=[2,4,6,8];
// console.log(arr);

// // Object
// var obj = {
//     "name" : "Pavithra",
//     "age" : 18,
//     "city" : "Coimbatore"
// }

// // Arithmetic Operator (+, -, *, /, %, **)
// var a=10;
// var b="20";

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// //Relational Operator (<, >, <=, >=, ==, !=, ===, !==)
// var a=10;
// var b="20";
// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);

// // Assignment Operator (=, +=, -=, *=, /=, %=, **=)
// var a=10;
// console.log(a);
// a+=10;
// console.log(a);
// a-=10;
// console.log(a);
// a*=10;
// console.log(a);
// a/=10;
// console.log(a);
// a%=10;
// console.log(a);
// a**=10;
// console.log(a);

// // Logical Operator (&&, ||, !)
// a=true;
// b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// // Terinary Operator (? :)
// a=50;
// res1 = a>20 ? "Greater" : "Smaller";
// console.log(res1);

// b=10;
// res2 = b>20 ? "Greater" : b<20 ? "Smaller" : "Equal";
// console.log(res2);

// // TypeOf Operator 
// console.log(typeof(p));
// console.log(typeof(q));
// console.log(typeof(bool));
// console.log(typeof(r));
// console.log(typeof(s));
// console.log(typeof(t));
// console.log(typeof(u));

// // Arrow Function
// var add = (a,b) => {
//     return a+b;
// }
// console.log(add(10,20));
// console.log(typeof(add));

// // Spread Operator
// var arr1 = [1, 2, 3];
// var arr2 = [...arr1, 4, 5, 6];
// console.log(arr2);

// //Destructuring operator

// const [name,age] = ["Pavithra", 18];
// console.log(name);

// const obj = { 
//     name: "Pavithra",
//     age: 18,
//     city: "Coimbatore"
// }
// console.log(obj.name);
// console.log(typeof(obj));

// obj=[2, 4, 6, 8]

// // for in loop
// for (i in obj){
//     console.log(i, obj[i]);
// }

// // for of loop
// for (i of obj){
//     console.log(i);
// }

// // for each loop
// obj.forEach((value, index) => {
//     console.log(value, index);
// })

// class Person{
//     name;
//     age;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     display(){
//         console.log(this.name, this.age);
//     }
// }
// var p1 = new Person("Pavithra", 18);
// p1.display();


// // Prime Number
// var num = 2;
// var c=0;
// for (let i=2; i<=num/2; i++){
//     if (num%i==0){
//         c++;
//         break;
//     }
// }
// if (c==0) console.log("Prime");
// else console.log("Not a Prime");

// // Palindrome

// var num = 121;
// var num1=num;
// rev=0;
// while(num>0){
//     rev=rev*10+(num%10);
//     num=Math.floor(num/10);
// }
// if (num1==rev) console.log("Palindrome");

// let b=50; // Global
// var a=10; // Global
// const c=70;
// if(true){
//     var a=20; // Global
//     let b=30; // Box 
//     const c=40;
//     console.log(c);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// //Hosting
// console.log(a); // undefined // automatically decalre var a;
// var a=10;

// add();
// function add(){
//     console.log(10+20);
// }

// var obj={"name" : "Pavithra",
//     "age" : 18,
//     "city" : "Coimbatore"
// }
// for(let i in obj){
//     console.log(i, obj[i]);
// }

// CallBack function

// var demo = () => {
//     console.log("Hellooooooooooooo !! ");
// }

// var main = (cb) => {
//     console.log("Main Called");
//     cb();
// }

// main(demo);

// var main = (cb) => {
//     console.log("Main Called");
//     cb();
// }

// main(() => {
//     console.log("Hellooooooooooooo !! ");
// });

// var add = (a, b, cb) => {
//     var result = a+b;
//     cb(result);
// }

// add(10, 20, (res) => {
//     console.log(res);
// });

// SetTimeout

var demo = () => {
    setTimeout(() => {
        console.log("Processing .... ");
    }, 2000
    )   
}
demo();

