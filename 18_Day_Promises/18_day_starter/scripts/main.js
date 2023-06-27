// const countriesAPI = "https://restcountries.com/v2/all";
// 1
const catsAPI = "https://api.thecatapi.com/v1/breeds";
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // document.body.innerHTML = data;
  })
  .catch((error) => console.error(error));

// 2
const root = document.querySelector("#root");
const button = document.querySelector("#text");
async function getAllName() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const names = await response.json();
    // console.log(names);
    names.forEach((name) => {
      let catName = `<div>Name : ${name.name}</div>`;
      root.innerHTML += catName;
    });
  } catch (err) {
    console.log(err);
  }
}
getAllName();

// 3 Random Cat 'click'
async function getOneCat(id) {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
  const cats = await res.json();
  console.log(cats);

  const catRandom = `<div>CAT:<p>${cats.name}</p></div>`;
  root.innerHTML += catRandom;
}

let id = 1;
button.addEventListener("click", () => {
  getOneCat(id);
  id++;
});
