// 1
document.querySelector("p");
// 2
document.querySelector("#p1");
document.querySelector("#p2");
document.querySelector("#p3");
document.querySelector("#p4");
//3
const allPara = document.querySelectorAll("p");
console.log(allPara.length);
// 4
for (let i = 0; i < allPara.length; i++) {
  console.log(allPara[i]);
};
// 5
const allP = document.querySelectorAll('p')
allP[3].textContent = 'Fourth';
// 6
allP[3].className = 'four'
allP[2].setAttribute('class', 'third');
allP[1].classList.add('two');

// LEVEL 2
// 1
allP.forEach((p) => {
    p.style.background = 'blue'
    p.style.fontSize = '2em'
});
// 2
allP.forEach((p, i) =>{
    p.style.color = 'green'
    if(i % 2 === 0){
        p.style.color = 'red'
    }
});
