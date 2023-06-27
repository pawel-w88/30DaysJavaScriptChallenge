import { countries_data } from "../data/countries_data.js";
console.log(countries_data);

let head = document.querySelector("header");
head.style.textAlign = "center";
head.style.fontFamily = "newRoman";

let text = document.querySelector("#total-countries");
text.innerText = `Total number of Countries: ${countries_data.length}`;
text.style.fontSize = "1.2rem";

let countriesDiv = document.querySelector(".countries-wrapper");
countriesDiv.style.width = "650px";
countriesDiv.style.display = "flex";
countriesDiv.style.flexWrap = "wrap";
countriesDiv.style.justifyContent = "center";
countriesDiv.style.margin = "0 auto";

for (let i = 0; i < countries_data.length; i++) {
  const box = document.createElement("div");
  countriesDiv.appendChild(box);
  box.innerText = `${countries_data[i].name}`;
  box.style.width = "120px";
  box.style.height = "120px";
  box.style.margin = "2px";
  box.style.border = "2px solid black";
  box.style.textAlign = "center";
  box.style.fontFamily = "newRoman";
  box.style.fontSize = "1.2rem";
}
