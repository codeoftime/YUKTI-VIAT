/* ---------------------------
SMOOTH SCROLLING
---------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
})

})
})


/* ---------------------------
NAVBAR CHANGE ON SCROLL
---------------------------- */

const header = document.querySelector("header")

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.style.background = "rgba(0,0,0,0.9)"
header.style.backdropFilter = "blur(8px)"

}

else{

header.style.background = "rgba(0,0,0,0.4)"

}

})


/* ---------------------------
SCROLL REVEAL ANIMATION
---------------------------- */

const revealElements = document.querySelectorAll(
".card, .price-card, .hero h1, h2"
)

const revealObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1"
entry.target.style.transform = "translateY(0)"

}

})

},{
threshold:0.2
})


revealElements.forEach(el => {

el.style.opacity = "0"
el.style.transform = "translateY(40px)"
el.style.transition = "all 0.8s ease"

revealObserver.observe(el)

})


/* ---------------------------
CAROUSEL CONTROL
---------------------------- */

const carousel = document.querySelector(".carousel")

if(carousel){

carousel.addEventListener("mouseenter", () => {

carousel.style.animationPlayState = "paused"

})

carousel.addEventListener("mouseleave", () => {

carousel.style.animationPlayState = "running"

})

}


/* ---------------------------
BACK TO TOP BUTTON
---------------------------- */

const topBtn = document.createElement("button")

topBtn.innerHTML = "⬆"
topBtn.id = "topBtn"

document.body.appendChild(topBtn)


topBtn.style.position = "fixed"
topBtn.style.bottom = "40px"
topBtn.style.right = "40px"
topBtn.style.padding = "10px 15px"
topBtn.style.fontSize = "18px"
topBtn.style.borderRadius = "50%"
topBtn.style.border = "none"
topBtn.style.background = "#00ffd5"
topBtn.style.cursor = "pointer"
topBtn.style.display = "none"


window.addEventListener("scroll", () => {

if(window.scrollY > 400){

topBtn.style.display = "block"

}else{

topBtn.style.display = "none"

}

})


topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
})

})


/* ---------------------------
PARALLAX HERO EFFECT
---------------------------- */

const hero = document.querySelector(".hero")

window.addEventListener("scroll", () => {

let offset = window.scrollY

if(hero){

hero.style.transform = "translateY(" + offset * 0.2 + "px)"

}

})


/* ---------------------------
CARD HOVER EFFECT
---------------------------- */

document.querySelectorAll(".card").forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

card.style.transform =
"rotateX(" + ((y - rect.height/2) / 20) + "deg) rotateY(" + ((x - rect.width/2) / 20) + "deg)"

})

card.addEventListener("mouseleave", () => {

card.style.transform = "rotateX(0) rotateY(0)"

})

})


/* ---------------------------
LAZY IMAGE LOADING
---------------------------- */

const lazyImages = document.querySelectorAll("img")

const imgObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

let img = entry.target

img.src = img.dataset.src || img.src

imgObserver.unobserve(img)

}

})

})

lazyImages.forEach(img => {

imgObserver.observe(img)

})


/* ---------------------------
RESPONSIVE MOBILE MENU
---------------------------- */

const nav = document.querySelector("nav")

const menuBtn = document.createElement("div")

menuBtn.innerHTML = "☰"
menuBtn.id = "menuBtn"

document.querySelector("header").appendChild(menuBtn)


menuBtn.style.fontSize = "28px"
menuBtn.style.cursor = "pointer"
menuBtn.style.display = "none"


function checkScreen(){

if(window.innerWidth < 768){

nav.style.display = "none"
menuBtn.style.display = "block"

}else{

nav.style.display = "block"
menuBtn.style.display = "none"

}

}

checkScreen()

window.addEventListener("resize", checkScreen)


menuBtn.addEventListener("click", () => {

if(nav.style.display === "none"){

nav.style.display = "flex"
nav.style.flexDirection = "column"

}else{

nav.style.display = "none"

}

})

/* ---------------------------
YUKTI COUNTDOWN
---------------------------- */

const eventDate = new Date("March 24, 2026 09:00:00").getTime()

setInterval(()=>{

const now = new Date().getTime()

const gap = eventDate - now

const day = 1000*60*60*24
const hour = 1000*60*60
const minute = 1000*60

const d = Math.floor(gap/day)
const h = Math.floor((gap%day)/hour)
const m = Math.floor((gap%hour)/minute)
const s = Math.floor((gap%minute)/1000)

document.getElementById("days").innerText = d
document.getElementById("hours").innerText = h
document.getElementById("minutes").innerText = m
document.getElementById("seconds").innerText = s

},1000)

const track = document.querySelector(".carousel-track")

track.addEventListener("mouseenter",()=>{
track.style.animationPlayState="paused"
})

track.addEventListener("mouseleave",()=>{
track.style.animationPlayState="running"
})