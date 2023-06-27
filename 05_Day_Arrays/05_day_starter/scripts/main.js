console.clear();
// console.log(countries);

const array = Array();
console.log(array);

const arr = Array(4).fill(4);
console.log(arr.length);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(0, 1));
console.log(numbers.splice(-1));

const  mixedDataTypes = [2, 4, 6, 'hallo', 'world', 'javaScript'];
console.log(mixedDataTypes.length);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies.splice(0, 1));
console.log(itCompanies[4]);
console.log(itCompanies.splice(-1));
console.log(itCompanies.toString().toUpperCase());

if(itCompanies.includes('Certain')){
    console.log(itCompanies);
}else{
    console.log('is not found');
}
console.log(itCompanies.reverse());
console.log(itCompanies.sort());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(2, 5));
console.log(itCompanies.slice(1, 4));
console.log(itCompanies.pop());
console.log(itCompanies.shift());

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split();
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
console.log(shoppingCart);
console.log(shoppingCart.splice(0, 4));

