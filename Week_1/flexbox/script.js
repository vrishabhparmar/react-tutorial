// variables (var, let , const)

const price = 3000; //  This declaration helps too fix the value

var a = 5000; // it is used only when dealing with older browser

let b = 10000 // it is used only when the value might change in future

// ---- Note: let and const variables are  scoped into there nearest blocks 
// suppose if we declare const or let in a function. It cannot be accessed outside the
// function

// Data types & structures ( string, numbers, booleans, array, objects)

const description = ' New decription';
const newPrice = 50000;
const newFloor = false;
const options = ['One', 'two', 'thress']; // list of string values

console.log(options);

// Objects
const apartment = {
    price: 3000, 
    size: 500,
    furnished: 'Yes'
}

console.log(apartment);

// Functions Expression

var calculate = function(a,b){
    return a + b;
}

const result = calculate(10,90);

console.log(result);

// Arrow Functions

const arrowFunction = () => {
    console.log("Arrow Function");    
}

arrowFunction();

// Scoping & Hoisting

const ans = add(10,9);

console.log(ans);


// Here we are able to call a function before declaring a function but this will not work
// with arrow function because they are passed a value to a variable;
let sub = (a,b) => a - b;

function add(a,b){
    return a + b;
}

// we can call arrow function only after we declare it.  
console.log(sub(10,9));

// String Concat

const pr = 5000;
const  desp = `Your total cost is ${pr}`

console.log(desp);

// Control Flow

if(500 > 300)
{
    console.log(true);
}
else{
    console.log(false);
}

// Operators (&, |, >= , <=, ^, ==, ===)

// === vs == If we even want to check the type then we go for ===

// Loops (for each vs for)

const list = ['a', 'b', 'c'];

list.forEach((x) => console.log(x));

 for(let i = 0; i < 3; i++)
 {
    console.log(list[i] + ' options');
 }

// Iteracting with HTMl CSS & (Documnet Object Manipulation # DOM)

const textElem = document.querySelector('.text');

console.log(textElem);

const handleClick = () => {
    textElem.innerHTML = '<span> Welcome! </span>';
}

textElem.addEventListener('click', handleClick);



// Template literals

const mail = `Hello, 

Thanks for your response. 

Best
Tom.

`

console.log(mail);

// Destructuring 

const [one, two] = [1,2];

console.log(one);
console.log(two);

// Map()

const colors = ['red', 'orange', 'white', 'green'];

const items = colors.map(color => `<li> ${color} </li>`);


console.log(items);

// Filter

const num = [1,2,3,4,5];

const res = num.filter( val => val % 2 == 0);

console.log(res);

// Reduce

const grades = [75, 50, 90, 87, 66];

const addAll = grades.reduce(sum);

function sum(accumulator, element) {

    return accumulator + element;
    
}

console.log(addAll);

// Call back
// It is a situation in javascript where callbacks within other callbacks ot a degree
// where the code becomes difficult to read. 
// Old pattern to handle asyshcronous functions 
// Use Promises + Async/Await to avoid Call back hell.


function task1(callback){

    setTimeout(() => {
        console.log('Task 1 complete');
        callback();
    }, 2000);

}

function task2(callback){
    setTimeout(() => {
        console.log('Task 2 complete');
        callback();
    }, 1500)

    
}

function task3(callback){
    setTimeout(() => {
        console.log('Task 3 complete');
        callback();
    }, 2000)

   
}

function task4(callback){
    setTimeout(() => {
        console.log('Task 4 complete');
        callback();
    }, 1500)

    
}


// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log('All Task completed');
//             })
//         })
//     })
// })

// Promises


function walkDog(){
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const dog = true;
            if(dog){
                resolve('You walk a Dog');
            }
            else{
                reject(`You didn't walk the dog`);
            }
        },1500);
    });
}


function cleanKithen(){
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchen = true;
            if(kitchen)
            {
                resolve('You clean the kitchen');
            } 
            else{
                reject(`You didn't clean the kitchen`)
            }
            
        },2500);
    })

    
}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trash = true;
            if(trash)
            {
                resolve('You take out trash');
            }
            else{
                reject(`You didn't take out trash`);
            }
            
        },500);
    })
}

// Method Chaining in Promises

// walkDog().then((val) => {console.log(val); return cleanKithen()})
//         .then((val) => { console.log(val); return takeOutTrash()})
//         .then((val) => { console.log(val); console.log('All task done')})
//         .catch((error) => console.log(error));



// Async / await

// Async: makes the function return a promise 
// Await; makes the function to wait for the promise

async function doChores(){

   try{
        const walkTheDog = await walkDog();
        console.log(walkTheDog);

        const cleanTheKitchen = await cleanKithen();
        console.log(cleanTheKitchen);

        const takeOutTheTrash = await takeOutTrash();
        console.log(takeOutTheTrash);

        console.log('All chores were completed!!');
   }
   catch(err)
   {
        console.error(err);
   }


}


doChores();

// Imperative approach in JS
// Here you are telling the browser exactly how to 
/**
 * 
 * 1. Create a button
 * 2. Set Text
 * Handle clicks
 * Update text manually
 */
const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', () => {
    button.textContent='Clicked!';
});
document.body.appendChild(button);


























 






 





























