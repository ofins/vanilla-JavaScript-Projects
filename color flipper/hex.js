const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const colorBtn = document.querySelector("#color-btn")
let colorCode = document.querySelector(".color-code")

function randomHex() {
    return Math.floor(Math.random()*hex.length)
}
let hexColor = ""
colorBtn.addEventListener("click", function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomHex()]
    }
    colorCode.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})






