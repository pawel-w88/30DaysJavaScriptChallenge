// this is your main.js script
console.clear();
const age = 17;
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with years to drive.`);
}

const myAge = 30;
const yourAge = 25;

if (myAge >= yourAge) {
  console.log("i am older than you ");
} else {
  console.log("you are older");
}

let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

const num = 2;

if (num % 2 === 0) {
  console.log("is a even number.");
} else {
  console.log("is not even number.");
}

const num2 = 9;
if (num2 % 3 === 0) {
  console.log("is an odd number.");
} else {
  console.log("is not odd number.");
}
//1
const grades = 55;

if(grades >= 80 && grades <= 100){ 
    console.log("A");
}
else if(grades >= 70 && grades <= 79){
    console.log("B");
}
else if(grades >= 60 && grades <= 69){
    console.log("C");
}
else if (grades >= 50 && grades <= 59){
    console.log("D");
}
else if (grades >= 40 && grades <= 49){
    console.log("E");
}
else{
    console.log("F");
}

// 2

const month = 'march';

if(month == 'january' || month == 'february' || month == 'december'){
    console.log('is Winter')
}
else if(month == 'march' || month == 'april' || month == 'may'){
    console.log('is Spring')
}
else if(month == 'june' || month == 'jule' || month == 'august'){
    console.log('is Summer')
}
else{
    console.log('is Autumn')
}

