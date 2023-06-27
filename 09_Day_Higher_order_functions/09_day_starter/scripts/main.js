// 2
const callback = (n) => {
  return (n += n);
};
// 3
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
countries.forEach((el) => console.log(el));

const countriesToUpperCase = countries.map((el) => el.toUpperCase());
console.log(countriesToUpperCase);

const countriesLength = countries.map((el) => el.countries).length;
console.log(countriesLength);

// 4
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

names.forEach((name) => console.log(name));

const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

// 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((num) => console.log(num));

const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);
// 10
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
function getPrice(obj) {
  return obj.price;
}
const money = products.map(getPrice);
console.log(money);
// 11
const countriesContainingLand = countries.filter((country) =>
  country.toLowerCase().includes("land")
);
console.log(countriesContainingLand);
// 12
const countriesHaveSixLetters = countries.filter(
  (country) => country.length === 6
);
console.log(countriesHaveSixLetters);
// 13
const countriesHaveMoreLetters = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesHaveMoreLetters);
// 14
const countriesStart = countries.filter((countries) =>
  countries.startsWith("E")
);
console.log(countriesStart);
// 15
const valuePrice = products.filter(function (products) {
  return products.price > 0;
});
console.log(valuePrice);
// 16
let arr = ["Asabeneh", "Mathias", "Elias", "Brook"];
function getStringLists(arr) {
  return arr.toString();
}
console.log(getStringLists(arr));
// 17
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
// 18
const sentence = countries.reduce((acc, curr) => {
  if (curr === countries[countries.length - 1]) {
    return `${acc}${curr} are north European countries`;
  }
  return `${acc}${curr}, `;
}, "");
console.log(sentence);
// 20
const nameLength = names.some((name) => name > 7);
console.log(nameLength);
// 21
const everyCountries = countries.every((el) => el.includes("land"));
console.log(everyCountries);
// 23
const findCountries = countries.find((land) => land.length == 6);
console.log(findCountries);
// 24
const indexCountries = countries.findIndex((land) => land.length == 6);
console.log(indexCountries);
// 25
const indexNorway = countries.findIndex((land) => land === "Norway");
console.log(indexNorway);
// 26
const indexRussia = countries.findIndex((land) => land === "Russia");
console.log(indexRussia);

console.log("---------LEVEL 2---------");
// 1
const totalPrice = products
  .filter((product) => typeof product.price === "number")
  .map((product) => product.price)
  .reduce((acc, curr) => acc + curr);
console.log(totalPrice);
// 3
const categorizeCountries = countries.filter((countries) =>
  countries.includes("land", "ia", "island", "stan")
);
console.log(categorizeCountries);
// 4
function letterCountsByCountry() {
  let counts = {};
  countries.forEach(country => {
    let letter = country.charAt(0);
    if (letter in counts) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  });
  return Object.entries(counts);
};
console.log(letterCountsByCountry());
console.log();


