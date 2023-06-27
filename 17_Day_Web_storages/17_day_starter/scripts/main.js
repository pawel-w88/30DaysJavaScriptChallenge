localStorage.setItem("firstName", "Pawel");
localStorage.setItem("lastName", "Wojciechowski");
localStorage.setItem("age", 35);
localStorage.setItem("city", "Wroclaw");
console.log(localStorage);

// 2

let student = {
  firstName: "Roman",
  lastName: "Tide",
  age: 39,
  skills: ["HTML", "CSS", "JS", "React"],
  country: "Germany",
};

let studentInfo = JSON.stringify(student, undefined, 5)
localStorage.setItem('student', studentInfo)

