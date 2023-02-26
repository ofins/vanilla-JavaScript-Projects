const simple = ["#0000FF","#FFFF00","#FFF","#FF0000","#FF6633"] //simple colors

const colorBtn = document.querySelector("#color-btn") //get color button from HTML
let colorCode = document.querySelector(".color-code") 

function randomHex() {
    return Math.floor(Math.random()*simple.length)
}
let simpleColor = ""
colorBtn.addEventListener("click", function() {
    simpleColor = simple[randomHex()]
    colorCode.textContent = simpleColor
    document.body.style.backgroundColor = simpleColor
})






