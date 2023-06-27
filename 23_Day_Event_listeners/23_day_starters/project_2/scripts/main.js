const resultFeld = document.getElementById("result");

document.onkeyup = (e) => {
  let key = e.key; // der aktuelle key als buchstabe
  if (key === " ") {
    key = "Space";
  }
  //   console.log(key);
  resultFeld.innerText = key;
};
