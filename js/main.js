let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let button = document.querySelector("button.C");
let div = document.querySelector("div.captcha");
let input = document.querySelector("input#input");
let p = document.querySelector("p#ERROR");

generateData();

button.addEventListener("click", function () {
  console.log(generate);
  if (input.value === generate) {
    alert("بشه ی منههههههههه!");
  } else {
    generateData();
    alert(">:<");
  }
});

function generateData() {
  generate =
    characters.charAt(Math.random() * 62) +
    characters.charAt(Math.random() * 62) +
    characters.charAt(Math.random() * 62) +
    characters.charAt(Math.random() * 62);

  div.innerText = generate;
}
