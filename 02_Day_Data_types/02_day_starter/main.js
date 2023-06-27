// this is your main.js script

const challenge = "30 Day of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('3'));
console.log(challenge.lastIndexOf('Script'));
console.log(challenge.trim(' '));
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Script'));
console.log(challenge.match('a'));

let string = '30'
console.log(string.concat(" Days ", " Of ", " JavaScript "));

console.log(challenge.repeat(2));

// Level 2

const quote = 'There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another.'

console.log(quote);

const mother = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(mother);

console.log(typeof 10);

let num = '9.8';
let numFloat = parseFloat(num)
console.log(numFloat);
console.log(Math.round(9.8));

let includ = 'python, jargon';
console.log(includ.includes('on'));

const includ2 = 'I hope this course is not full of jargon.';
console.log(includ2.includes('jargon'));

console.clear();

let randomNum = Math.floor(Math.random() *50);
console.log(randomNum);

let randomNum2 = Math.floor(Math.random() *50) +50;
console.log(randomNum2);

let randomNum3 = Math.floor(Math.random() *255);
console.log(randomNum3);
