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


// Async / await

















 






 





























