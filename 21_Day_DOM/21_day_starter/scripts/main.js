const titleOne = document.querySelector('h1');
titleOne.style.textAlign = "center";
const titleTwo = document.querySelector('h2')
titleTwo.style.textAlign = 'center',
titleTwo.style.textDecoration = 'underline';

const allLi = document.querySelectorAll('li')
allLi.forEach((li)=>{
li.style.backgroundColor = 'red'
li.style.listStyleType = 'none'
li.style.fontSize = '1.2em'
li.style.margin = '5px'
li.style.padding = '10px'
})
allLi[0].style.backgroundColor = 'green'
allLi[1].style.backgroundColor = 'yellow'
