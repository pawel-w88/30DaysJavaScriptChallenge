// 1
const constants = [2.72, 3.14, 9.81, 37, 100];

let [e, pi, gravity, bodyTemp, boilingTemp] = constants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);

// 2
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

let [fin, est, sw, den, nor] = countries;

console.log(fin, est, sw, den, nor);

// 3
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

// 2.1
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
for(const{name, scores, skills, age} of users){
    console.log(name, scores, skills, age)
}
