const bodyText = document.body;
bodyText.style.textAlign = "center";

const empty = document.querySelector("#empty");
document.getElementById("button").addEventListener("click", change);

function change(event) {
  const textFeld = document.querySelector("#feld");
  empty.innerText = event.target.value;
}

let container = document.querySelector(".wrapper");
container.style.width = "70vw";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.margin = "0 auto";

for (let i = 0; i < 100; i++) {
  const box = document.createElement("div");
  container.append(box);
  box.innerText = i;
  box.style.width = "100px";
  box.style.height = "50px";
  box.style.margin = "2px";
  if (i % 2 === 0) {
    box.style.background = "green";
  } else if (isPrime(i)) {
    box.style.background = "red";
  } else {
    box.style.background = "yellow";
  }
}
function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return num > 1;
}
