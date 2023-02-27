const increaseBtn = document.getElementById("increase-btn")
const resetBtn = document.getElementById("reset-btn")
const decreaseBtn = document.getElementById("decrease-btn")
let count = document.getElementById("count-el")

count.textContent = 0 //set initial value to 0

increaseBtn.addEventListener("click", function() {
    count.textContent = parseInt(count.textContent) + 1
    color()
})

resetBtn.addEventListener("click", function() {
    count.textContent = 0
})

decreaseBtn.addEventListener("click", function() {
    count.textContent = parseInt(count.textContent) - 1
    color()
})

// change color of count based on value
function color() {
    countNum = parseInt(count.textContent)
    if(countNum > 0) {
        count.style.color = "green"
    } else if (countNum < 0 ) {
        count.style.color = "red"
    }
}