const randcolor = document.querySelector(".randcolor");

randcolor.addEventListener("click", randcolors);

function randcolors() {
  let color = "#";
  let symbol = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += symbol[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
}
