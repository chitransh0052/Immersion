// function test()
// {
//     console.log("this is a test function");

// }
// test();
// function diameter(radius)
// {
//     return 2 * radius;
// }

// console.log(diameter(4));

//arrow function------  =>
    // let diameter1=(radius) => {
    //     return 2 * radius;
    // }

//     let diameter2=r=>2*radius;
// console.log(diameter2(4));


//hof ------ higher order function

//when we [ass a function as a n argument inside another function is known as hof


function d(){
    console.log("this is d function");
}
function p(f){ // p is hof
    console.log("this is a p function");
    f(); // f is callback function
}
p(d)

//when an outer function retun a complete inner function is known as hof

function outer()
{
    let count=0;
    function inner()
    {
        count++;
        console.log(count);
    }
    return inner;
}
let res=outer();
res();
res();
res();
res();


let r=outer()
r();
r();
r();
r();




// // ques :- 
let radii=[1,2,3,4,5,6];
// area=[];
// cirm=[];
// vol=[];

function area(r){
    return Math.PI*r*r;
}

function vol(r){
    return(4/3)*Math.PI*r*r*r;
}
function cirm(r){
    return 2*Math.PI*r;
} 


function calculate(logic){
    let res=[];
    for(let i=0;i<radii.length;i++)
    {
        res.push(logic(radii[i]))
    }
    console.log(res);
}
calculate(area);
calculate(cirm);
calculate(vol);


let q=true;
setTimeout(()=>{
    let count=0;
    while(q)
    {
        count++;
        console.log(count);
        
    }
},0);
q=!q;



console.log("one");
setTimeout(()=>{
    console.log("one.one");
},2000);
console.log("two");
setTimeout(()=>{
    console.log("two.two");
},0);
console.log("three");
setTimeout(()=>{
    console.log("three.three");
},3000);


let p1=new Promise((resolve,reject)=>{
    
});
console.log(p1);
let p2=new Promise((resolve,reject)=>{
    resolve();
});
console.log(p2);
let p3=new Promise((resolve,reject)=>{
    reject();
});
console.log(p3);