const bodyText = document.body;
bodyText.style.textAlign = 'center';

let container = document.querySelector(".wrapper");
container.style.width = '550px'
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = 'center';
container.style.margin = '0 auto';

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
};
function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return num > 1;
};

