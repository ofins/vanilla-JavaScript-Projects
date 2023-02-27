let text = document.querySelector(".profile")
const button = document.querySelector(".surprise-btn")
const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")

//input review profiles in a form of object within an array
reviews = [
    {image: "./images/img-1.png",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},
    {image: "./images/img-2.jpg",
    name: "Anna Johnson",
    job: "WEB DESIGN",
    description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},
    {image: "./images/img-3.png",
    name: "Peter Jones",
    job: "INTERN",
    description:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},
    {image: "./images/img-4.png",
    name: "Bill Anderson",
    job: "THE BOSS",
    description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."}
]

randomProfile() //defaults a random profile when page is loaded

function randomProfile () {
    randomNum = Math.floor(Math.random()*reviews.length)
    displayProfile(reviews[randomNum].image, reviews[randomNum].name,reviews[randomNum].job,reviews[randomNum].description) 
}

//write out the HTML text for inserting image, name, job, and description
function displayProfile (image,name,job,description) {
    text.innerHTML = 
    `<div class="circle"></div>
        <img src="${image}">
        <h2>${name}</h2>
        <h3>${job}</h3>
        <p>${description}</p>
    `
}

//when clicked, surprise me button will generate a random profile
button.addEventListener("click", function() {
    randomProfile()
})

//when left or right arrow is clicked, will move to the next/last profile in line
leftArrow.addEventListener("click",function() {
    let i = randomNum-- // the left one would be randomNum subtract 1
    if (i < 0 ) {
        randomNum = 3 //if reached the first item in array, set it back to the last item
        i = randomNum-- //this formula resets the randomNum so it will work when arrow is clicked again
        displayProfile(reviews[i].image, reviews[i].name, reviews[i].job, reviews[i].description)
    }
    displayProfile(reviews[i].image, reviews[i].name, reviews[i].job, reviews[i].description)
})

rightArrow.addEventListener("click",function() {
    let i = randomNum++
    if (i > 3 ) {
        randomNum = -1 
        i = randomNum++ /
        displayProfile(reviews[i].image, reviews[i].name, reviews[i].job, reviews[i].description)
    }
    displayProfile(reviews[i].image, reviews[i].name, reviews[i].job, reviews[i].description)
})