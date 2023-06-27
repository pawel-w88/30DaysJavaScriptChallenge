console.clear();
let i = 10
// 1
for(let i = 0; i <=10; i++){
    console.log(i);
}

while (i <= 10) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
} while (i <= 10)

console.log('---------------');
// 2

for(let i = 10; i > 0; i--){
    console.log(i);
}

while (i > 0) {
    console.log(i)
    i--
}

do {
    console.log(i)
    i--
} while (i > 0)

console.log('---------------');
// 3

// for(let i = 1; i > 0; i++){
//     console.log(i);
// }

console.log('---------------');
// 4

let output = "";
for(i = 1; i <= 7; i++){
    output = output + '#';
    console.log(output);
}

console.log('---------------');
// 5

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++)
    console.log(`${i} * ${j} = ${i * j}`)
}

console.log('---------------');
// 7 EVEN

for(let i = 1; i <= 30; i+=2){
    console.log(i);
}

console.log('---------------');
// 8 ODDS

for(let i = 0; i <= 30; i+=2){
    console.log(i);
} // co druga liczbe i+=3, daje co trzecia;

 
for (let i = 0; i <= 50; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}

console.log('---------------');
// 10

let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

// 11

let sum2 = 0; // ODDS
for (let i = 1; i <= 100; i+=2){
    sum2 += i;
}
console.log(sum2);


let sum3 = 0; // EVEN
for (let i = 0; i <= 100; i+=2){
    sum3 += i;
}
console.log(sum3);

// 13

const array = 0;
newArr = array[Math.random()]
for(i = 1; i <= array.length ; i++){
    console.log(newArr);
}
