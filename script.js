window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 0);
});

var radio = document.querySelector(".manual-btn");
var cont = 1;
document.getElementById("radio1").checked = true;
setInterval(() => {
  proximaImg();
}, 2000);
function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}
