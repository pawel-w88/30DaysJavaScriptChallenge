console.clear();
//1
function fullName() {
  let firstName = "Pawel";
  let lastName = "Pawlak";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
fullName();

// 2
function functionName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(functionName("Pawel", "Pawlak"));

// 3

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;
  console.log(sum);
}
addTwoNumbers();

function addNumer(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}
addNumer(20, 49);

//4
let width = 3;
let lenght = 5;
function areaOfRectangle() {
  let area = width * lenght;
  return area;
}
console.log(areaOfRectangle());

// 5
function perimeterOfRectangle() {
  let perimeter = 2 * (lenght + width);
  console.log(perimeter);
}
perimeterOfRectangle();

// 6
let height = 5;
function volumeOfRectPrism() {
  let volume = lenght * width * height;
  console.log(volume);
}
volumeOfRectPrism();

// 7
let radius = 5;
function areaOfCircle() {
  let area = Math.PI * radius * radius;
  console.log(area);
}
areaOfCircle();

// 8
function circumOfCircle() {
  let circum = 2 * Math.PI * radius;
  console.log(circum);
}
circumOfCircle();

// 9
let mass = 3;
let volume = 6;
function density() {
  let density = mass / volume;
  console.log(density);
}
density();

// 10
let distance = 500;
let time = 0.2;
function speed() {
  let speed = distance / time;
  console.log(speed);
}
speed();

// 11
function weightOfSubstance() {
  let gravity = 100;
  let weight = mass * gravity;
  console.log(weight);
}
weightOfSubstance();

// 12
function convertFahrenheitToCelsius(F) {
  let C = (5 / 9) * (F - 32);
  console.log(C);
}
convertFahrenheitToCelsius(1);

function convertCelsiusToFahrenheit(c) {
  let f = (c * 9) / 5 + 32;
  console.log(f);
}
convertCelsiusToFahrenheit(35);

// 13
function calculatedBmi(weightKg, height) {
  let bmi = weightKg / (height * height);
  console.log(bmi);
}
calculatedBmi(78, 175);

// 14
// let month = "March";
function checkSeason(month) {
  if (month == "January" || "February" || "December") {
    return "Winter";
  } if (month == "March" || "April" || "May") {
    return "Spring";
  } if (month == "June" || "July" || "August") {
    return "Summer";
  } else {
    return "Autumn";
  }
}

console.log(checkSeason('March'));

// 15
function findMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  else {
    return num3;
  }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

console.log("LEVEL 2");
// 1
function solveLinEquation(a, b, c) {
  return -c / (a + b);
}
console.log(solveLinEquation(2, 8, 8));

// 2
function solveQuadEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c;
}
console.log(solveQuadEquation(1, 4, 4));

// 3
let myArr = [1, 2, 3];
function printArray(x, y, z) {
  return myArr;
}
console.log(printArray());

// 4
function showDateTime() {
  const now = new Date();
  const years = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(`${date}/${month}/${years} ${hours}:${minutes}`);
}
showDateTime();

// 5
function swapValues(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  return [x, y];
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

// 6
function reverseArray() {
  return myArr.reverse();
}
console.log(reverseArray());

// 7
let foods = ["Apfel", "Banana", "Orange"];
function capitalizedarray(array, index) {
  for (i = 0; i < array.length; i++) {
    if (i == index) {
      console.log(array[i]);
      result = array[i].toUpperCase();
      return result;
    }
  }
}
result = capitalizedarray(foods, 2);
console.log(result);

// 8
let auto = ["audi", "bmw", "clio"];
function addItem(item) {
  return auto.push("vw");
}
addItem();
console.log(auto);

// 9
function removeItem() {
  return auto.shift();
}
removeItem();
console.log(auto);

// 10
function sumOfNumber(num1, num2, num3) {
  for (let i = 0; i < 3; i++) {
    let sum = num1 + num2 + num3;
    return sum;
  }
}
console.log(sumOfNumber(3, 5, 8));

// 11
let odds = 0;
function sumOfOdds() {
  for (let i = 0; i < 10; i += 2) {
    console.log(i);
  }
}
sumOfOdds();

// 12
let even = 1;
function sumOfEven() {
  for (let i = 1; i < 10; i += 2) {
    console.log(i);
  }
}
sumOfEven();

// 13
function evensAndOdds(num) {
  let evenCount = 0;
  let oddCount = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    num--;
  }
  console.log(`The number of odds are ${oddCount}.`);
  console.log(`The number of evens are ${evenCount}.`);
}
evensAndOdds(101);

// 14
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3));

// 15
function randomUserIP() {
  // Generate random numbers between 0 and 256 for the 4 octets
  let octet1 = Math.floor(Math.random() * 256);
  let octet2 = Math.floor(Math.random() * 256);
  let octet3 = Math.floor(Math.random() * 256);
  let octet4 = Math.floor(Math.random() * 256);

  // Return the randomly generated IP address
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}
console.log(randomUserIP());

// 16
function randomMacAddress() {
  let macAddress = "";
  for (let i = 0; i < 12; i++) {
    let randomNumber = Math.floor(Math.random() * 16).toString(16);
    macAddress = macAddress.concat(randomNumber);
    if (i % 2 === 1 && i !== 11) {
      macAddress = macAddress.concat(":");
    }
  }
  return macAddress;
}
console.log(randomMacAddress());

// 17
function randomHexaNumberGenerator() {
  let hexaNumber = "#";
  const hexaLetters = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    hexaNumber += hexaLetters[Math.floor(Math.random() * 16)];
  }
  return hexaNumber;
}
console.log(randomHexaNumberGenerator());

// 18
function userIdGenerator() {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log(userIdGenerator());
