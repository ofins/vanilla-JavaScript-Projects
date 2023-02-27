const openBtn = document.getElementById("open-btn")
const containerOverlay = document.querySelector(".container-overlay")
const closeBtn = document.getElementById("close-btn")
const blurScreen = document.querySelector(".blur")

openBtn.addEventListener("click", function() {
    containerOverlay.classList.remove("hide-overlay")
    blurScreen.classList.remove("hide-overlay")
})

closeBtn.addEventListener("click", function() {
    containerOverlay.classList.add("hide-overlay")
    blurScreen.classList.add("hide-overlay")
})