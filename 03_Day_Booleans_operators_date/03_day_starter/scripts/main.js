// this is your main.js script
const firstName = 'Pawel';
const lastName = 'Wojciechowski';
const country = 'Deutschland';
const city = 'Duisburg';
const age = 35;
const isMaried = true;
const year = 2023;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMaried );

console.log('10' !== 10);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

console.log('python'.length != 'jargon'.length);

console.clear();

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

const now = new Date();

const years = now.getFullYear();
const month = now.getMonth()+1;
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();


console.log(`${date}/${month}/${years} ${hours}:${minutes}`);

const secunds = Date.now();
console.log(secunds);
