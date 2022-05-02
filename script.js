const btn = document.getElementById("btn");
const light = document.querySelector(".light");

let toggler = true;
btn.addEventListener("click", function () {
  console.log("clicked");
  if (toggler) {
    light.style.opacity = 1;
    toggler = false;
  } else {
    light.style.opacity = 0;
    toggler = true;
  }
  btn.classList.toggle("active");
});
