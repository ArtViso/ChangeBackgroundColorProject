const randcolor = document.querySelector(".randcolor"),
  colors = document.querySelector(".colors");

randcolor.addEventListener("click", randcolors);

function randcolors() {
  let color = "0123456789ABCDEF";
  let a = "#";
  for (let i = 0; i < 6; i++) {
    a += color[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = a;
  colors.innerHTML = a;
}
