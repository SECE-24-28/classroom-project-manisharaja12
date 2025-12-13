// // //Template Literals
// // var age = 18;
// // var name = "priya"
// // var str = 'priya age is ${age}'
// // console.log(str);
// // console.log(${name} age is ${age});
// // console.log(name +"age is"+age);

// // //Map
// // var arr = [1,2,3,4,5];
// // var double = arr.map(num=>num*2); //**3
// // console.log(double)


// // //Filter
// // var even = arr.filter(num=>num%2===0);
// // console.log(even);

// // //Reducer
// // var total = arr.reduce((sum,num)=>(sum+num),0);  //count sum+1
// // console.log(total)

// // //arr in even
// // var evenCount = arr.map(num=>num**3).filter(num=>num%2===0).reduce((sum,num)=>(sum+1),0);
// // console.log(evenCount);


// //filter
// var student = [
//     {name:"priyaraj",
//      marks:90},
//      {name:"pooja",marks:88},
//      {name:"amudha",marks:91},
//      {name:"madhu",marks:87},
// ];
// var studentMarks = student.filter(s=>s.marks>88);
// console.log(studentMarks);

// //map
// var studentName = student.map(s=>s.name);
// console.log(studentName);

// //reduce
// var totalMarks = student.reduce((sum,s)=>(sum+s.marks),0);
// console.log(totalMarks);
// var avg = totalMarks/student.length;
// console.log(avg);



//promise
// const promise=new Promise((resolve,reject)=>{
//     var success=true;
//     if(success){
//         resolve("success");
//     },2000
//     else{
//         reject("failed");
//     }
// })
// promise.then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },2000)
// })
//  promise.then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// const getData = ()=>{
//     return fetch ('https://jsonplaceholder.typicode.com/posts')
// }
//    getData().then(response=>response.json())
//    .then(data=>console.log(data))
//    .catch(err=>console.log(err));


//async function and awit keyword
const getData = async()=>{
    try{
   var res=await fetch ('https://jsonplaceholder.typicode.com/posts')
   var data= await res.json();
    console.log(data);
}
 catch(err){
    console.log (err);
}
}
getData();


