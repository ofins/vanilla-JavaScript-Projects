const toggleBtn = document.getElementById("toggle")
const navbar = document.querySelector(".navbar")
const closeBtn = document.getElementById("close-btn")


navbar.classList.add("hide") //start the site with sidebar hidden

toggleBtn.addEventListener("click", function () {
    // if (navbar.classList.contains("hide")) {
    //     navbar.classList.remove("hide")
    // } else {
    //     navbar.classList.add("hide")
    // }
    navbar.classList.toggle("hide")   
})

//close botton
closeBtn.addEventListener("click", function() {
    navbar.classList.add("hide")
})