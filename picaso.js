console.log("I paint nicely");
const domElement = document.getElementById("bifrost");
domElement.addEventListener("click", function () {
  console.log("I print stuff on console");
  const randomHue = Math.round(Math.random() * 360);
  console.log(randomHue);
  domElement.style.color = `hsl(${randomHue},80%, 50%)`;
});
