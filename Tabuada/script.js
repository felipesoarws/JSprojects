let calcBtn = document.getElementById("calc");
let numbers = document.querySelectorAll(".multiplicand");
let inputed_numbers = document.querySelectorAll(".inputed-number");
let results = document.querySelectorAll(".result");

document.addEventListener("keydown", (e) => {
  const tecla = e.key;
  if (tecla) {
    document.getElementById("calc").click();
  }
});

calcBtn.addEventListener("click", () => {
  let number = document.getElementById("number").value;

  results.forEach((res, idx) => {
    inputed_numbers.forEach((numb) => {
      if (number == "") {
        numb.innerHTML = "?";
        res.innerHTML = "?";
      } else {
        numb.innerHTML = number;
        let Multiplier = idx + 1;
        let product = number * Multiplier;
        res.innerHTML = product;
      }
    });
  });
});
