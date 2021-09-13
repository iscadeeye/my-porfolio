let info = document.querySelector(".info")
let closeButton = document.getElementById("close")
let openButton = document.getElementById("open")
let circle = document.querySelector(".hide-show")

openButton.addEventListener("click", function () {
  info.classList.add("show")
  circle.classList.add("nav")
})

closeButton.addEventListener("click", function () {
    circle.classList.remove('nav')
    info.classList.remove("show")
})
